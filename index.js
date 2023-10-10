console.log (" Digite o nome do Herói")

let nickname = "Robe"
let experienciaXp = 11000; let Xp = true
let pontosDeVida = 0
const heroi = "O Herói de nome "
const nivel = " está no nível "


for (let i =0; i <11; i++){
pontosDeVida += 1
console.log ("Tomou poção mágica " + i)

}

switch (Xp){
 case  experienciaXp > 0 && experienciaXp <=1000 :
    console.log (heroi + nickname + nivel + "Ferro")
    break
 
 case experienciaXp >= 1001 && experienciaXp <=2000:
    console.log (heroi + nickname + nivel + "Bronze" )
    break
 
 case experienciaXp >= 2001 && experienciaXp <=5000:
    console.log (heroi+nickname+nivel+ "Prata")
    break
    
case experienciaXp >=6001 && experienciaXp <=7000:
    console.log (heroi+nickname+nivel+ "Ouro")
    break

case experienciaXp >=7001 && experienciaXp <=8000:
    console.log (heroi+nickname+nivel+ "Platina")
    break

case experienciaXp >=8001 && experienciaXp <=9000:
    console.log (heroi+nickname+nivel+ "Ascendente")
    break

case experienciaXp >=9001 && experienciaXp <=10000:
    console.log (heroi+nickname+nivel+ "Imortal")
    break

case experienciaXp >=10001:
    console.log (heroi+nickname+nivel+ "Radiante")
    break
}
