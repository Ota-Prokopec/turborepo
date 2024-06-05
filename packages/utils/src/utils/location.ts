import * as lodash from 'lodash'
import { get } from './fetching'
import type { Coords } from '@repo/ts-types'
import * as geolocationUtils from 'geolocation-utils'

export type IP = string
export type IPApiResponse = {
	ip: IP
	version: string
	city: string
	region: string
	region_code: string
	country_code: string
	country_code_iso3: string
	country_name: string
	country_capital: string
	country_tld: string
	continent_code: string
	in_eu: false
	postal: string
	latitude: number
	longitude: number
	timezone: string
	utc_offset: string
	country_calling_code: string
	currency: string
	currency_name: string
	languages: string
	country_area: number
	country_population: number
	asn: string
	org: string
}

export const metersOfOneDegree = 111000

export const getUsersLocation = (
	options: PositionOptions = { enableHighAccuracy: false },
): Promise<Coords> => {
	return new Promise((res) => {
		if (typeof window === 'undefined') throw new Error('You called this on server side')

		navigator.geolocation.getCurrentPosition(
			function (position) {
				res([position.coords.latitude, position.coords.longitude])
			},
			(err) => {
				throw err
			},
			options,
		)
	})
}

export const watchUsersLocation = (
	callback: (location: Coords, heading: number | null) => void,
	options: PositionOptions = { enableHighAccuracy: true },
): void => {
	navigator.geolocation.getCurrentPosition(
		(position) => {
			callback(
				[position.coords.latitude, position.coords.longitude],
				position.coords.heading,
			)
		},
		(err) => {
			throw err
		},
		options,
	)
	navigator.geolocation.watchPosition(
		(position) => {
			callback(
				[position.coords.latitude, position.coords.longitude],
				position.coords.heading,
			)
		},
		() => {},
		options,
	)
}

export const getUsersLocationDataByIP = async (ip: IP): Promise<IPApiResponse> => {
	const res = await get(`https://ipapi.co/${ip}/json/`)
	return res as IPApiResponse
}

export const degreeToMeters = (degree: number) => {
	return degree * metersOfOneDegree
}

export const metersToDegree = (meters: number) => {
	return meters / metersOfOneDegree
}

/**
 * @returns time in seconds
 */
export const getTimeFromAToB = (location1: Coords, location2: Coords, speed: number) => {
	const distance = geolocationUtils.distanceTo(
		{ lat: location1[0], lng: location1[1] },
		{ lat: location2[0], lng: location2[1] },
	)
	return distance / speed
}

export const getLocationUrlOfGoogleMaps = (location: Coords) => {
	return `https://www.google.com/maps/dir/?api=1&destination=${location[0]},${location[1]}`
}

/**
 * @returns meters
 */
export const distanceTo = (location1: Coords, location2: Coords) =>
	geolocationUtils.distanceTo(
		{ lat: location1[0], lng: location1[1] },
		{ lat: location2[0], lng: location2[1] },
	)

/**
 * @returns distance: meters
 * @returns heading: degrees(number)
 */
export const headingDistanceTo = (location1: Coords, location2: Coords) =>
	geolocationUtils.headingDistanceTo(
		{ lat: location1[0], lng: location1[1] },
		{ lat: location2[0], lng: location2[1] },
	)

const calculateDegreeToTarget = (
	usersLocation: Coords,
	usersHeading: number,
	targetPoint: Coords,
) => {
	// Get user's current position and heading using the Geolocation API
	// Extract user's latitude, longitude, and heading
	const userLat = usersLocation[0]
	const userLon = usersLocation[1]

	// Calculate the difference in latitude and longitude
	const latDiff = targetPoint[0] - userLat
	const lonDiff = targetPoint[1] - userLon

	// Calculate the angle in radians
	const angleRadians = Math.atan2(lonDiff, latDiff)

	// Convert radians to degrees
	let angleDegrees = angleRadians * (180 / Math.PI)

	// Adjust the angle based on user's heading
	angleDegrees -= usersHeading

	// Ensure the angle is within 0-360 degrees range
	if (angleDegrees < 0) {
		angleDegrees += 360
	}

	// Return the degree value representing the direction
	return angleDegrees
}

export const watchUsersDegreeToTarget = (
	targetLocation: Coords,
	callback: (degree: number) => void,
) => {
	window.addEventListener('deviceorientation', function (e) {
		if (e.absolute !== true || e.alpha === null || e.beta === null || e.gamma === null)
			throw new Error('deviceorientation coords not found')
		callback(compassHeading(e.alpha, e.beta, e.gamma))
	})
}

function compassHeading(alpha: number, beta: number, gamma: number) {
	// Convert degrees to radians
	var alphaRad = alpha * (Math.PI / 180)
	var betaRad = beta * (Math.PI / 180)
	var gammaRad = gamma * (Math.PI / 180)

	// Calculate equation components
	var cA = Math.cos(alphaRad)
	var sA = Math.sin(alphaRad)
	var cB = Math.cos(betaRad)
	var sB = Math.sin(betaRad)
	var cG = Math.cos(gammaRad)
	var sG = Math.sin(gammaRad)

	// Calculate A, B, C rotation components
	var rA = -cA * sG - sA * sB * cG
	var rB = -sA * sG + cA * sB * cG
	var rC = -cB * cG

	// Calculate compass heading
	var compassHeading = Math.atan(rA / rB)

	// Convert from half unit circle to whole unit circle
	if (rB < 0) {
		compassHeading += Math.PI
	} else if (rA < 0) {
		compassHeading += 2 * Math.PI
	}

	// Convert radians to degrees
	compassHeading *= 180 / Math.PI

	return compassHeading
}
