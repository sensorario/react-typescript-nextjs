export default function Home() {

  async function serverAction(formData: FormData) {
    "use server"
    console.log('form', formData.get('testo'))
  }

  return (
    <>
      <form action={serverAction}>
        <input type="text" name="testo" id="testo" />
        <button>invia</button>
      </form>
    </>
  )
}
