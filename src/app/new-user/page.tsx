
export default function NewUserPage() {

    return (
      <>
        <h1>Welcome. You&apos;re almost ready</h1>
        <form>
          <label htmlFor='handle'>Handle</label>
          <input id='handle' type='text' placeholder='your handle' />
          <button type='submit'>Submit</button>
        </form>
      </>
    );
}