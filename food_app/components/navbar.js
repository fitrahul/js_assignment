function navbar () {
    return `    <div id="navbar">
                    <div id="form">
                        <h3><a href="index.html">Home</a></h3>
                        <form action="" id="abc">
                            <input type="text" name="" id="receipe" placeholder="Type Receipe Name" />
                            <input type="submit" name="" id="submit">
                        </form>
                    </div>
                    <div id="food">
                        <h3><a href="/day.html">Receipe of The Day</a></h3>
                        <h3><a href="/latest.html">Latest Receipe</a></h3>
                    </div>
                </div>`
}

export default navbar;