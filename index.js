const buttons = document.querySelectorAll(".drum");

buttons.forEach((button) => {
    button.addEventListener("click", () =>{
        const clickBtn = button.classList[0];
        console.log(clickBtn);
        
        switch (clickBtn){
            case "w":
                const crash = new Audio("./sounds/crash.mp3");
                crash.play(); 
                break;

                case "a":
                    const kichBass = new Audio("./sounds/kick-bass.mp3");
                    kichBass.play();
                    break;

                    case "s":
                        const snare = new Audio("./sounds/snare.mp3");
                        snare.play();
                        break;

                        case "d":
                            const tom1 = new Audio("./sounds/tom1.mp3");
                            tom1.play();
                            break;

                            case "j":
                                const tom2 = new Audio("./sounds/tom2.mp3");
                                tom2.play();
                                break;

                                case "k":
                                    const tom3 = new Audio("./sounds/tom3.mp3");
                                    tom3.play();
                                    break;
                                    
                                case "l":
                                    const tom4 = new Audio("./sounds/tom4.mp3");
                                    tom4.play();
                                    break;
                                
                }
            
                //
  });
});