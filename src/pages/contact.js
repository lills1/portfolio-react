function Contact() {
    return (
        <>
            <h2 id="contact-me-heading">Contact </h2>
<div class="container">
            <form class="color" action="/action_page.php">
                <p>What is your name?</p> <label for="fname"></label>
                <input type="text" id="fname" name="fname" />
                <p> What is your email?</p> <label for="email"></label>
                <input type="email" id="email" name="email" />
                <p>What is your enquiry?</p><textarea></textarea>
                <p>  <input type="submit" value="Submit" /> </p>
            </form>
            </div>

        </>
    )
}

export default Contact