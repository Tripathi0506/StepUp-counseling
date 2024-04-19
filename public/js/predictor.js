let countNumber=0;
let givenGender=document.querySelector()
if('female'===givenGender){
    givenPersentail=givenPersentail+2;

}

if('st/sc'===givenCategory){
    givenPersentail=givenPersentail+4;
}else if('obc'===givenCategory || 'ews'===givenCategory){
    givenPersentail=givenPersentail+2;
}

for(i of collegeList){
    if(i.state===geivenState){
        if(i.percentail<=givenPersentail){
            if(countNumber<=givenNumber){
                print(i.name)
                countNumber++;
            }
        }
    }
}