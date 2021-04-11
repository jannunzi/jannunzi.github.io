(function () {
    const main = () => {
        $("body").on("click", record)
    }
    $(main);

    const record = (event) => {
        console.log(event)
        console.log(event.target)
        console.log(this)
    }

    /**
     * Simulates low level click event
     * @param {string} selector - CSS selector of element to click
     */
    const click = (selector) => {
        const domElement = $(selector)[0];
        if (document.createEvent && domElement) {
            const event = document.createEvent("MouseEvents");
            event.initMouseEvent(
                "click",
                true, true,
                window,
                0, 0, 0, 0, 0,
                false, false, false, false, 0, null);
            try {
                const allowDefault = domElement.dispatchEvent(event);
            } catch (e) {
                console.log(e);
            }
        }
    }
})();
