document.querySelector('#submit').addEventListener('click',birthday)
document.querySelector('#new').addEventListener('click',clear)


function birthday () {  

    var month = document.querySelector('#bmonth').value
    var date = document.querySelector("#bdate").value

    if (month === "" || date === "") {
        alert("Please complete the form")
    }

    if (month == 1 && date >= 20 || month == 2 && date <= 18 ) {

        document.querySelector("#Aquarius").style.display = 'block' 
        document.querySelector("#Aquarius-para").style.display = 'block' 
    }
    
    if (month == 2 && date >= 19 || month == 3 && date <= 20 ) {
        
        document.querySelector("#Pisces").style.display = 'block'
        document.querySelector("#Pisces-para").style.display = 'block'   
    }
    if (month == 3 && date >= 21 || month == 4 && date <= 19){

        document.querySelector("#Aries").style.display = 'block'
        document.querySelector("#Aries-para").style.display = 'block'   

    }
    if (month == 4 && date >= 20 || month == 5 && date <= 20){

        document.querySelector("#Taurus").style.display = 'block'
        document.querySelector("#Taurus-para").style.display = 'block'    
    }
    if(month == 5 && date >= 21 || month == 6 && date <= 20){
        document.querySelector("#Gemini").style.display = 'block'
        document.querySelector("#Gemini-para").style.display = 'block'
    }
    if(month == 6 && date >= 21 || month == 7 && date <= 22){
        document.querySelector("#Cancer").style.display = 'block'
        document.querySelector("#Cancer-para").style.display = 'block'

    }
    if(month == 7 && date >= 23 || month == 8 && date <= 22){
        document.querySelector("#Leo").style.display = 'block'
        document.querySelector("#Leo-para").style.display = 'block'

    }
    if(month == 8 && date >= 23 || month == 9 && date <= 22){
        document.querySelector("#Virgo").style.display = 'block'
        document.querySelector("#Virgo-para").style.display = 'block'
    }
    if(month == 9 && date >= 23 || month == 10 && date <= 22){
        document.querySelector("#Libra").style.display = 'block'
        document.querySelector("#Libra-para").style.display = 'block'
    }
    if(month == 10 && date >= 23 || month == 11 && date <= 2){
        document.querySelector("#Scorpio").style.display = 'block'
        document.querySelector("#Scorpio-para").style.display = 'block'
    }
    if(month == 11 && date >= 22 || month == 11 && date <= 22){
        document.querySelector("#Sag").style.display = 'block'
        document.querySelector("#Sag-para").style.display = 'block'
    }
    if(month == 12 && date >= 22 || month == 1 && date <= 19){
        document.querySelector("#Cap").style.display = 'block'
        document.querySelector("#Cap-para").style.display = 'block'
    }

}

function clear () {

    window.location.reload();
    

        }



