function simulateCache() {
    const input = document.getElementById("accessInput").value;
    const size = parseInt(document.getElementById("cacheSize").value);

    if (!input || !size) {
        alert("Please enter valid inputs");
        return;
    }

    const accesses = input.split(',').map(n => parseInt(n.trim()));
    const cache = new Array(size).fill(null);
    let output = "";

    accesses.forEach(block => {
        const line = block % size;

        if (cache[line] === block) {
            output += `Access ${block} → HIT <br>`;
        } else {
            output += `Access ${block} → MISS <br>`;
            cache[line] = block;
        }
    });

    document.getElementById("result").innerHTML = output;

    let tableHTML = "";
    cache.forEach((value, i) => {
        tableHTML += `<tr><td>${i}</td><td>${value !== null ? value : '-'}</td></tr>`;
    });

    document.getElementById("cacheTable").innerHTML = tableHTML;
}
