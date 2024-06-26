<script lang="ts">
	import Column from '$lib/components/Common/Column.svelte'
	import Text from '$lib/components/Common/Text.svelte'
	import LL, { locale } from '$src/i18n/i18n-svelte'
	import { twMerge } from 'tailwind-merge'
	import Card from '../Common/Card.svelte'
	import Right from '../Common/Right.svelte'
	import { Button, Modal } from 'flowbite-svelte'
	import lsStore from '$lib/utils/lsStore'

	let className = ''
	export { className as class }
</script>

<Modal
	open
	title={$LL.component.Terms.terms()}
	dismissable={false}
	class={twMerge(' overflow-scroll', className)}
>
	<Column class="p-4 ">
		{#if $locale === 'en'}
			<Text class="text-xl font-bold">1. Acceptance of Terms</Text>

			<Text>
				By accessing or using the mypets.cz mobile application ("the App"), you agree to
				comply with and be bound by these Terms and Conditions. If you do not agree with
				these terms, please refrain from using the App.
			</Text>

			<Text class="text-xl font-bold">2. User Responsibilities</Text>

			<Text>
				Users are solely responsible for the accuracy, completeness, and legality of any
				data, including images, they upload, submit, or otherwise make available through
				the App. Mypets.cz is not responsible for the content users generate within the
				app.
			</Text>

			<Text class="text-xl font-bold">3. Cookies</Text>

			<Text
				>Mypets.cz may use cookies to enhance your user experience. Cookies are small
				pieces of data stored on your device that help improve the functionality of the
				App. By using the App, you consent to the use of cookies in accordance with our
				Cookie Policy, available at [Cookie Policy Link].</Text
			>

			<Text class="text-xl font-bold">4. User Account</Text>

			<Text>
				To access certain features of the App, you may be required to create a user
				account. You are responsible for maintaining the confidentiality of your account
				information, including your username and password. Any activities that occur under
				your account are your responsibility.</Text
			>

			<Text class="text-xl font-bold">5. Limitation of Liability</Text>

			<Text>
				Mypets.cz is not liable for any direct, indirect, incidental, consequential, or
				punitive damages arising out of your use of the App, including but not limited to
				loss of data, profits, or business interruption.
			</Text>

			<Text class="text-xl font-bold">6. Changes to Terms and Conditions</Text>

			<Text>
				Mypets.cz reserves the right to update, modify, or replace these Terms and
				Conditions at any time without prior notice. It is your responsibility to review
				these terms periodically. Continued use of the App after any changes signifies
				your acceptance of the updated terms.</Text
			>

			<Text class="text-xl font-bold">7. Termination of Access</Text>

			<Text>
				Mypets.cz reserves the right to terminate or suspend your access to the App at its
				sole discretion, without prior notice, for any reason, including but not limited
				to a violation of these Terms and Conditions.
			</Text>

			<Text class="text-xl font-bold">8. Governing Law</Text>

			<Text>
				These Terms and Conditions are governed by and construed in accordance with the
				laws of [Jurisdiction]. Any disputes arising out of or related to these terms
				shall be subject to the exclusive jurisdiction of the courts in [Jurisdiction]. By
				using the Mypets.cz App, you acknowledge that you have read, understood, and
				agreed to these Terms and Conditions. If you have any questions or concerns,
				please contact us at [Contact Email].
			</Text>

			<Text class="text-xl font-bold">9. Users location</Text>

			<Text>
				The user's location will be stored in your browser's local storage. You can yours
				send the location to the database of the My Pets application and thus let the
				owner know where the pet is is currently located.
			</Text>

			<Text class="text-xl font-bold">10. responsibility</Text>

			<Text>
				The application is not responsible for content the user loads into application.
				You as a user are responsible for content that you load into the application.
			</Text>
		{:else}
			<Text class="text-xl font-bold">1. Přijetí podmínek</Text>

			<Text>
				Přístupem nebo používáním mobilní aplikace mypets.cz ("Aplikace") souhlasíte s
				dodržováním a vázáním těmito obchodními podmínkami. Pokud s těmito podmínkami
				nesouhlasíte, prosím, zdržte se používání Aplikace.
			</Text>

			<Text class="text-xl font-bold">2. Zodpovědnost uživatele</Text>

			<Text>
				Uživatelé jsou výhradně zodpovědní za přesnost, úplnost a legálnost jakýchkoli
				dat, včetně obrázků, které nahrávají, odesílají nebo jinak poskytují
				prostřednictvím Aplikace. Mypets.cz není zodpovědný za obsah, který uživatelé
				generují v rámci aplikace.
			</Text>

			<Text class="text-xl font-bold">3. Cookies</Text>

			<Text>
				Mypets.cz může využívat soubory cookies ke zlepšení vašeho uživatelského zážitku.
				Cookies jsou malé úlomky dat uložené na vašem zařízení, které pomáhají zlepšit
				funkcionalitu Aplikace. Používáním Aplikace souhlasíte s používáním cookies v
				souladu s našimi Zásadami používání cookies, dostupnými na [Odkaz na zásady
				používání cookies].
			</Text>

			<Text class="text-xl font-bold">4. Uživatelský účet</Text>

			<Text>
				K přístupu k určitým funkcím Aplikace může být vyžadováno vytvoření uživatelského
				účtu. Jste zodpovědní za udržování důvěrnosti informací o svém účtu, včetně
				uživatelského jména a hesla. Za všechny aktivity, které se vyskytnou pod vaším
				účtem, nesete odpovědnost.
			</Text>

			<Text class="text-xl font-bold">5. Omezení odpovědnosti</Text>

			<Text>
				Mypets.cz nenese odpovědnost za přímé, nepřímé, náhodné, následné nebo postihové
				škody vzniklé v důsledku vašeho používání Aplikace, včetně, ale neomezeně, ztráty
				dat, zisku nebo přerušení podnikání.
			</Text>

			<Text class="text-xl font-bold">6. Změny v podmínkách</Text>

			<Text>
				Mypets.cz si vyhrazuje právo aktualizovat, upravit nebo nahradit tyto Obchodní
				podmínky kdykoliv bez předchozího upozornění. Je vaší odpovědností pravidelně tyto
				podmínky zkontrolovat. Pokračující používání Aplikace po jakýchkoli změnách
				znamená váš souhlas s aktualizovanými podmínkami.
			</Text>

			<Text class="text-xl font-bold">7. Ukončení přístupu</Text>

			<Text>
				Mypets.cz si vyhrazuje právo ukončit nebo pozastavit váš přístup k Aplikaci podle
				svého výhradního uvážení, bez předchozího upozornění, z jakéhokoli důvodu, včetně
				porušení těchto Obchodních podmínek.
			</Text>

			<Text class="text-xl font-bold">8. Uplatňování práva</Text>

			<Text>
				Tyto Obchodní podmínky podléhají a jsou vykládány v souladu s právem [Jurisdikce].
				Veškeré spory vyplývající z těchto podmínek nebo s nimi související spadají do
				výlučné jurisdikce soudů v [Jurisdikce]. Používáním Aplikace Tour
			</Text>

			<Text class="text-xl font-bold">9. Uživatelova poloha</Text>

			<Text>
				Poloha uživatele bude uložena v lokálním úložišti vašeho prohlížeče. Můžete svou
				polohu poslat do databáze aplikace My Pets a tím dát vědět majitelovi zvířátka,
				kde se právě nachází.
			</Text>

			<Text class="text-xl font-bold">10. odpovědnost</Text>

			<Text>
				Aplikace nenese žádnou odpovědnost za obsah, který uživatel do aplikace zadá. Vy
				jakožto uživatel nesete plnou odpovědnost za obsah, který do aplikace zadáte.
			</Text>
		{/if}
	</Column>
	<Right>
		<Button on:click={() => ($lsStore.temrsAccepted = true)} color="green"
			>{$LL.component.Terms.acceptButtonLabel()}</Button
		>
	</Right>
</Modal>
