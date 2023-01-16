  const ALFABETO = {
	    CHIMANI: 0,
	    ANTIGUO: 1,
	    NUEVO: 2
    }
    
    function normalise(mapper){
        return mapper.map((row) => row.map((char) => char.normalize("NFC")));
    }

    function unlockTargets(){
        const from = document.querySelector('input[name="src_lang"]:checked').value;
        if (from == null || !from in ALFABETO){
          return; 
        }

        const buttons = document.getElementsByName("tgt_lang");
        buttons.forEach((button) => {
          if(button.value != from && button.id != "label"){
            button.disabled = false;
          }
          else
          {
            button.disabled = true;
          }
        })
    }
    
    function convert() {
        const from = document.querySelector('input[name="src_lang"]:checked').value;
        const to = document.querySelector('input[name="tgt_lang"]:checked').value;

        if(from == null || to == null){
          return;
        }

        // Get the text from the input textarea
        const source = document.getElementById('source').value;
        let target = '';
        
        // Get source/target alphabets
        const src_alph = ALFABETO[from];
        const tgt_alph = ALFABETO[to];
        
        // Sort mapper by length
        const sortedMapper = normalise(MAPPING).sort((a, b) => b[src_alph].length - a[src_alph].length);

        // Iterate and replace
        for (let t = 0; t < source.length;)
        {
            let swapped = false;
            INNER: for (let i = 0; i < sortedMapper.length; i++) {
                let src_char = sortedMapper[i][src_alph];
                let tgt_char = sortedMapper[i][tgt_alph];
                
                if(source.slice(t).startsWith(src_char)){
                    target += tgt_char; 
                    // Increment with number of characters to skip
                    t += src_char.length;
                    swapped = true;
                    break INNER;
                }
            }
            // If we couln't replace anything, just append the first character
            if(!swapped){
                target += source.slice(t, t+1);
                t+=1;
            }
        }
        document.getElementById('target').value = target;
    }
