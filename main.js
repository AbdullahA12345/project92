var canvas = new fabric.Canvas('myCanvas');
var x= document.getElementById("myAudio");

function new_image()
{
    fabric.Image.fromURL('BirthdayImage.jpg', function(Img){
        block_image_object=Img;
        block_image_object.scaleToWidth(700);
        block_image_object.scareToHeight(510);
        block_image_object({
        top:0
        left:0
        });
        canvas.add(block_image_object);
    })




	


}

function playSound(){

}

funtion playSound(){
    x.play();
}
