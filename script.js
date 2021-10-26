var output = document.getElementById('output');
    async function getDetails()
    {

    var inp = document.getElementById('inp_val').value;

    var out = document.getElementById('out_val').value;

    let input = document.getElementById('input').value;
    
    const res = await fetch("https://libretranslate.de/translate",
    {
	method: "POST",
	body: JSON.stringify({
		q:`${input}`,
		source: `${inp}`,
		target: `${out}`
	}),
	headers: { "Content-Type": "application/json" }
    });
    var data = await res.json();
    output.value=JSON.parse(JSON.stringify(data.translatedText));
    }