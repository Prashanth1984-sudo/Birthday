export function typeMemory(element, text, speed = 35, callback = null) {

    element.innerHTML = "";

    let i = 0;

    function type() {

        if (i >= text.length) {

            if (callback) callback();

            return;
        }

        element.innerHTML += text.charAt(i);

        i++;

        setTimeout(type, speed);

    }

    type();

}