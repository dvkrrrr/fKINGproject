var y;
   var x;
   var count;
   var flowers = new Map();
   count = 0;
   x = 75;
   y = 75;
   var udol = [];
   var tutt = [];
   var cena;
   cena = 0

    function buy(sender) {

    var example = document.getElementById('example1');
             ctx     = example.getContext('2d');
             pic     = new Image();
        if (sender == '1.png') {
            pic.src = "{{ url_for("static", filename="images/1.jpg")}}";
            pic.onload = function () {
                    ctx.drawImage(pic, 0, 0, 300, 300);

            }
            document.getElementById("rab").innerHTML = {{name[0][2]}}
        } else if (sender == '2.png') {
            pic.src = "{{ url_for("static", filename="images/2.jpg")}}";
            pic.onload = function () {
                    ctx.drawImage(pic, 0, 0, 300, 300);
            }
            document.getElementById("rab").innerHTML = {{name[1][2]}}
        } else if (sender == '3.png') {
            pic.src = "{{ url_for("static", filename="images/3.jpg")}}";
            pic.onload = function () {
                    ctx.drawImage(pic, 0, 0, 300, 300);
            }
            document.getElementById("rab").innerHTML = {{name[2][2]}}
        } else if (sender == '4.png') {
            pic.src = "{{ url_for("static", filename="images/4.jpg")}}";
            pic.onload = function () {
                    ctx.drawImage(pic, 0, 0, 300, 300);
            }
            document.getElementById("rab").innerHTML = {{name[3][2]}}
        } else if (sender == '5.png') {
            pic.src = "{{ url_for("static", filename="images/5.jpg")}}";
            pic.onload = function () {
                    ctx.drawImage(pic, 0, 0, 300, 300);
            }
            document.getElementById("rab").innerHTML = {{name[4][2]}}
        } else if (sender == '6.png') {
            pic.src = "{{ url_for("static", filename="images/6.jpg")}}";
            pic.onload = function () {
                    ctx.drawImage(pic, 0, 0, 300, 300);
            }
            document.getElementById("rab").innerHTML = {{name[5][2]}}
        } else if (sender == '7.png') {
            pic.src = "{{ url_for("static", filename="images/7.jpg")}}";
            pic.onload = function () {
                    ctx.drawImage(pic, 0, 0, 300, 300);
            }
            document.getElementById("rab").innerHTML = {{name[6][2]}}
        } else if (sender == '8.png') {
            pic.src = "{{ url_for("static", filename="images/8.jpg")}}";
            pic.onload = function () {
                    ctx.drawImage(pic, 0, 0, 300, 300);
            }
            document.getElementById("rab").innerHTML = 'Цена:' + ' ' + {{name[7][2]}} + ' ' + 'р'
       }

}



function plus(sender){
       var example = document.getElementById("example"),
       ctx     = example.getContext('2d');
       pic     = new Image();
       nach    = new Image();
       window.x;
       window.y;
       window.count;
       var stroka;
       stroka = "";

     if (count == 0){
          count ++;
          tutt.push(count);
          nach.src = "{{ url_for("static", filename="flower/украшения/упаковкакоричневая.png")}}";
               nach.onload = function () {
                   ctx.drawImage(nach, 30, 115, 150, 150);
        }
     } else if(udol.length == 0){
          count = tutt[tutt.length - 1];
          count ++;
          tutt.push(count);
     } else if(udol.length != 0){
          count = udol[0];
          udol.shift();
     }
     if (count == 2){
        y = 75
        x = 100;
    } else if (count == 3){
         x = 85;
         y = 95;
    } else if (count == 4){
         y = 55;
         x = 85;
    } else if (count == 5){
         x = 110;
         y = 95;
    } else if (count == 6){
         x = 60;
         y = 95;
    } else if (count == 7){
         x = 85;
         y = 115;
    } else if (count == 8){
         x = 60;
         y = 115;
    } else if (count == 9){
         x = 110;
         y = 115;
    } else if (count == 10){
         y = 70;
         x = 55;
    } else if (count == 11){
         y = 50;
         x = 60;
    } else if (count == 12){
         y = 70;
         x = 125;
    } else if (count == 13){
         y = 50;
         x = 110;
    } else if (count == 14){
         y = 95;
         x = 135;
    } else if (count == 15){
         x = 35;
         y = 95;
    } else if (count == 16){
         x = 35;
         y = 115;
    } else if (count == 17){
         x = 135;
         y = 115;
    } else if (count == 18){
         y = 30;
         x = 70;
    } else if (count == 19){
         x = 95;
         y = 30;
    } else if (count == 20){
         y = 90;
         x = 160;
    } else if (count == 21){
         x = 150;
         y = 70;
    } else if (count == 22){
         x = 140;
         y = 50;
    } else if (count == 23){
         x = 160;
         y = 110;
    }  else if (count == 24){
         x = 120;
         y = 30;
    } else if (count == 25){
         x = 30;
         y = 70;
    } else if (count == 26){
         x = 35;
         y = 50;
    } else if (count == 27){
         x = 45;
         y = 30;
    }
        if (sender == 1){
            pic.src = "{{ url_for("static", filename="flower/розакрасная.png")}}";
             pic.onload = function () {
                 ctx.drawImage(pic, x, y, 25, 25); }
             if (flowers.has('розакрасная') == true){
                 stroka = flowers.get('розакрасная') + ' '  + (x + ' ' + y + ' ' + count);
                 flowers.set('розакрасная', stroka);
             } else {
                 stroka = x + ' ' + y + ' ' + count
                 flowers.set('розакрасная', stroka);
             }
        } else if (sender == 2){
            pic.src = "{{ url_for("static", filename="flower/розамалиновая.png")}}";
             pic.onload = function () {
                 ctx.drawImage(pic, x, y, 25, 25); }

             if (flowers.has('розамалиновая') == true){
                 stroka = flowers.get('розамалиновая') + ' ' +  (x + ' ' + y  + ' ' + count);
                 flowers.set('розамалиновая', stroka);
             } else {
                 stroka = x + ' ' + y + ' ' + count
                 flowers.set('розамалиновая', stroka);
              }
        } else if (sender == 3){
            pic.src = "{{ url_for("static", filename="flower/розарозовая.png")}}";
             pic.onload = function () {
                 ctx.drawImage(pic, x, y, 25, 25); }

             if (flowers.has('розарозовая') == true){
                 stroka = flowers.get('розарозовая') + ' ' +  (x + ' ' + y + ' ' + count);
                 flowers.set('розарозовая', stroka);
             } else {
                 stroka = x + ' ' + y + ' ' + count
                 flowers.set('розарозовая', stroka);
              }

        } else if (sender == 4){
            pic.src = "{{ url_for("static", filename="flower/розанежно-розовая.png")}}";
             pic.onload = function () {
                 ctx.drawImage(pic, x, y, 25, 25); }

             if (flowers.has('розанежно-розовая') == true){
                 stroka = flowers.get('розанежно-розовая') + ' ' +  (x + ' ' + y + ' ' + count);
                 flowers.set('розанежно-розовая', stroka);
             } else {
                 stroka = x + ' ' + y + ' ' + count
                 flowers.set('розанежно-розовая', stroka);
              }

        } else if (sender == 5){
            pic.src = "{{ url_for("static", filename="flower/розабелая.png")}}";
             pic.onload = function () {
                 ctx.drawImage(pic, x, y, 25, 25); }

             if (flowers.has('розабелая') == true){
                 stroka = flowers.get('розабелая') + ' ' +  (x + ' ' + y + ' ' + count);
                 flowers.set('розабелая', stroka);
             } else {
                 stroka = x + ' ' + y + ' ' + count
                 flowers.set('розабелая', stroka);
              }
        } else if (sender == 6){
            pic.src = "{{ url_for("static", filename="flower/розаперсик.png")}}";
             pic.onload = function () {
                 ctx.drawImage(pic, x, y, 25, 25); }

             if (flowers.has('розаперсик') == true){
                 stroka = flowers.get('розаперсик') + ' ' +  (x + ' ' + y + ' ' + count);
                 flowers.set('розаперсик', stroka);
             } else {
                 stroka = x + ' ' + y + ' ' + count
                 flowers.set('розаперсик', stroka);
              }
        } else if (sender == 7){
            pic.src = "{{ url_for("static", filename="flower/хризантемарозовая.png")}}";
             pic.onload = function () {
                 ctx.drawImage(pic, x, y, 25, 25); }

             if (flowers.has('хризантемарозовая') == true){
                 stroka = flowers.get('хризантемарозовая') + ' ' +  (x + ' ' + y + ' ' + count);
                 flowers.set('хризантемарозовая', stroka);
             } else {
                 stroka = x + ' ' + y + ' ' + count
                 flowers.set('хризантемарозовая', stroka);
              }
        } else if (sender == 8){
            pic.src = "{{ url_for("static", filename="flower/хризантеманежно-розовая.png")}}";
             pic.onload = function () {
                 ctx.drawImage(pic, x, y, 25, 25); }

             if (flowers.has('хризантеманежно-розовая') == true){
                 stroka = flowers.get('хризантеманежно-розовая') + ' ' +  (x + ' ' + y + ' ' + count);
                 flowers.set('хризантеманежно-розовая', stroka);
             } else {
                 stroka = x + ' ' + y + ' ' + count
                 flowers.set('хризантеманежно-розовая', stroka);
              }
        } else if (sender == 9){
            pic.src = "{{ url_for("static", filename="flower/хризантемаперсик.png")}}";
             pic.onload = function () {
                 ctx.drawImage(pic, x, y, 25, 25); }

             if (flowers.has('хризантемаперсик') == true){
                 stroka = flowers.get('хризантемаперсик') + ' ' +  (x + ' ' + y + ' ' + count);
                 flowers.set('хризантемаперсик', stroka);
             } else {
                 stroka = x + ' ' + y + ' ' + count
                 flowers.set('хризантемаперсик', stroka);
              }
        } else if (sender == 10){
            pic.src = "{{ url_for("static", filename="flower/хризантемабелая.png")}}";
             pic.onload = function () {
                 ctx.drawImage(pic, x, y, 25, 25); }

             if (flowers.has('хризантемабелая') == true){
                 stroka = flowers.get('хризантемабелая') + ' ' +  (x + ' ' + y + ' ' + count);
                 flowers.set('хризантемабелая.png', stroka);
             } else {
                 stroka = x + ' ' + y + ' ' + count
                 flowers.set('хризантемабелая', stroka);
              }
        }else if (sender == 11){
            pic.src = "{{ url_for("static", filename="flower/хризантемазеленая.png")}}";
             pic.onload = function () {
                 ctx.drawImage(pic, x, y, 25, 25); }

             if (flowers.has('хризантемазеленая') == true){
                 stroka = flowers.get('хризантемазеленая') + ' ' +  (x + ' ' + y + ' ' + count);
                 flowers.set('хризантемазеленая', stroka);
             } else {
                 stroka = x + ' ' + y + ' ' + count
                 flowers.set('хризантемазеленая', stroka);
              }
        }else if (sender == 12){
            pic.src = "{{ url_for("static", filename="flower/хризантемасиняя.png")}}";
             pic.onload = function () {
                 ctx.drawImage(pic, x, y, 25, 25); }

             if (flowers.has('хризантемасиняя') == true){
                 stroka = flowers.get('хризантемасиняя') + ' ' +  (x + ' ' + y + ' ' + count);
                 flowers.set('хризантемасиняя', stroka);
             } else {
                 stroka = x + ' ' + y + ' ' + count
                 flowers.set('хризантемасиняя', stroka);
              }
        }else if (sender == 13){
            pic.src = "{{ url_for("static", filename="flower/альстремериятемно-розовая.png")}}";
             pic.onload = function () {
                 ctx.drawImage(pic, x, y, 25, 25); }

             if (flowers.has('альстремериятемно-розовая') == true){
                 stroka = flowers.get('альстремериятемно-розовая') + ' ' +  (x + ' ' + y + ' ' + count);
                 flowers.set('альстремериятемно-розовая', stroka);
             } else {
                 stroka = x + ' ' + y + ' ' + count
                 flowers.set('альстремериятемно-розовая', stroka);
              }
        }else if (sender == 14){
            pic.src = "{{ url_for("static", filename="flower/альстремериярозовая.png")}}";
             pic.onload = function () {
                 ctx.drawImage(pic, x, y, 25, 25); }

             if (flowers.has('альстремериярозовая') == true){
                 stroka = flowers.get('альстремериярозовая') + ' ' +  (x + ' ' + y + ' ' + count);
                 flowers.set('альстремериярозовая', stroka);
             } else {
                 stroka = x + ' ' + y + ' ' + count
                 flowers.set('альстремериярозовая', stroka);
              }
        }else if (sender == 15){
            pic.src = "{{ url_for("static", filename="flower/альстремерияоранжевая.png")}}";
             pic.onload = function () {
                 ctx.drawImage(pic, x, y, 25, 25); }

             if (flowers.has('альстремерияоранжевая') == true){
                 stroka = flowers.get('альстремерияоранжевая') + ' ' +  (x + ' ' + y + ' ' + count);
                 flowers.set('альстремерияоранжевая', stroka);
             } else {
                 stroka = x + ' ' + y + ' ' + count
                 flowers.set('альстремерияоранжевая', stroka);
              }
        }else if (sender == 16){
            pic.src = "{{ url_for("static", filename="flower/альстремерияжелтая.png")}}";
             pic.onload = function () {
                 ctx.drawImage(pic, x, y, 25, 25); }

             if (flowers.has('альстремерияжелтая') == true){
                 stroka = flowers.get('альстремерияжелтая') + ' ' +  (x + ' ' + y + ' ' + count);
                 flowers.set('альстремерияжелтая', stroka);
             } else {
                 stroka = x + ' ' + y + ' ' + count
                 flowers.set('альстремерияжелтая', stroka);
              }
        }else if (sender == 17){
            pic.src = "{{ url_for("static", filename="flower/aльстрeмериябелая.png")}}";
             pic.onload = function () {
                 ctx.drawImage(pic, x, y, 25, 25); }

             if (flowers.has('aльстрeмериябелая') == true){
                 stroka = flowers.get('aльстрeмериябелая') + ' ' +  (x + ' ' + y + ' ' + count);
                 flowers.set('aльстрeмериябелая', stroka);
             } else {
                 stroka = x + ' ' + y + ' ' + count
                 flowers.set('aльстрeмериябелая', stroka);
              }
        }else if (sender == 18){
            pic.src = "{{ url_for("static", filename="flower/альстремерияфиолетовая.png")}}";
             pic.onload = function () {
                 ctx.drawImage(pic, x, y, 25, 25); }

             if (flowers.has('альстремерияфиолетовая') == true){
                 stroka = flowers.get('альстремерияфиолетовая') + ' ' +  (x + ' ' + y + ' ' + count);
                 flowers.set('альстремерияфиолетовая', stroka);
             } else {
                 stroka = x + ' ' + y + ' ' + count
                 flowers.set('альстремерияфиолетовая', stroka);
              }
        }else if (sender == 19){
            pic.src = "{{ url_for("static", filename="flower/пионбелый.png")}}";
             pic.onload = function () {
                 ctx.drawImage(pic, x, y, 25, 25); }

             if (flowers.has('пионбелый') == true){
                 stroka = flowers.get('пионбелый') + ' ' +  (x + ' ' + y + ' ' + count);
                 flowers.set('пионбелый', stroka);
             } else {
                 stroka = x + ' ' + y + ' ' + count
                 flowers.set('пионбелый', stroka);
              }
        }else if (sender == 20){
            pic.src = "{{ url_for("static", filename="flower/пионрозовый.png")}}";
             pic.onload = function () {
                 ctx.drawImage(pic, x, y, 25, 25); }

             if (flowers.has('пионрозовый') == true){
                 stroka = flowers.get('пионрозовый') + ' ' +  (x + ' ' + y + ' ' + count);
                 flowers.set('пионрозовый', stroka);
             } else {
                 stroka = x + ' ' + y + ' ' + count
                 flowers.set('пионрозовый', stroka);
              }
        }else if (sender == 21){
            pic.src = "{{ url_for("static", filename="flower/пионярко-розовый.png")}}";
             pic.onload = function () {
                 ctx.drawImage(pic, x, y, 25, 25); }

             if (flowers.has('пионярко-розовый') == true){
                 stroka = flowers.get('пионярко-розовый') + ' ' +  (x + ' ' + y + ' ' + count);
                 flowers.set('пионярко-розовый', stroka);
             } else {
                 stroka = x + ' ' + y + ' ' + count
                 flowers.set('пионярко-розовый', stroka);
              }
        }else if (sender == 22){
            pic.src = "{{ url_for("static", filename="flower/пионкрасный.png")}}";
             pic.onload = function () {
                 ctx.drawImage(pic, x, y, 25, 25); }

             if (flowers.has('пионкрасный') == true){
                 stroka = flowers.get('пионкрасный') + ' ' +  (x + ' ' + y + ' ' + count);
                 flowers.set('пионкрасный', stroka);
             } else {
                 stroka = x + ' ' + y + ' ' + count
                 flowers.set('пионкрасный', stroka);
              }
        }else if (sender == 23){
            pic.src = "{{ url_for("static", filename="flower/пионжелтый.png")}}";
             pic.onload = function () {
                 ctx.drawImage(pic, x, y, 25, 25); }

             if (flowers.has('пионжелтый') == true){
                 stroka = flowers.get('пионжелтый') + ' ' +  (x + ' ' + y + ' ' + count);
                 flowers.set('пионжелтый', stroka);
             } else {
                 stroka = x + ' ' + y + ' ' + count
                 flowers.set('пионжелтый', stroka);
              }
        }else if (sender == 24){
            pic.src = "{{ url_for("static", filename="flower/пионсиний.png")}}";
             pic.onload = function () {
                 ctx.drawImage(pic, x, y, 25, 25); }

             if (flowers.has('пионсиний') == true){
                 stroka = flowers.get('пионсиний') + ' ' +  (x + ' ' + y + ' ' + count);
                 flowers.set('пионсиний', stroka);
             } else {
                 stroka = x + ' ' + y + ' ' + count
                 flowers.set('пионсиний', stroka);
              }
        }else if (sender == 25){
            pic.src = "{{ url_for("static", filename="flower/орхидеябелая.png")}}";
             pic.onload = function () {
                 ctx.drawImage(pic, x, y, 25, 25); }

             if (flowers.has('орхидеябелая.png') == true){
                 stroka = flowers.get('орхидеябелая.png') + ' ' +  (x + ' ' + y + ' ' + count);
                 flowers.set('орхидеябелая.png', stroka);
             } else {
                 stroka = x + ' ' + y + ' ' + count
                 flowers.set('орхидеябелая.png', stroka);
              }
        }else if (sender == 26){
            pic.src = "{{ url_for("static", filename="flower/орхидеярозовая.png")}}";
             pic.onload = function () {
                 ctx.drawImage(pic, x, y, 25, 25); }

             if (flowers.has('орхидеярозовая.png') == true){
                 stroka = flowers.get('орхидеярозовая.png') + ' ' +  (x + ' ' + y + ' ' + count);
                 flowers.set('орхидеярозовая.png', stroka);
             } else {
                 stroka = x + ' ' + y + ' ' + count
                 flowers.set('орхидеярозовая.png', stroka);
              }
        }else if (sender == 27){
            pic.src = "{{ url_for("static", filename="flower/орхидеямалиновая.png")}}";
             pic.onload = function () {
                 ctx.drawImage(pic, x, y, 25, 25); }

             if (flowers.has('орхидеямалиновая.png') == true){
                 stroka = flowers.get('орхидеямалиновая.png') + ' ' +  (x + ' ' + y + ' ' + count);
                 flowers.set('орхидеямалиновая.png', stroka);
             } else {
                 stroka = x + ' ' + y + ' ' + count
                 flowers.set('орхидеямалиновая.png', stroka);
              }
        }else if (sender == 28){
            pic.src = "{{ url_for("static", filename="flower/орхидеяжелтая.png")}}";
             pic.onload = function () {
                 ctx.drawImage(pic, x, y, 25, 25); }

             if (flowers.has('орхидеяжелтая') == true){
                 stroka = flowers.get('орхидеяжелтая') + ' ' +  (x + ' ' + y + ' ' + count);
                 flowers.set('орхидеяжелтая', stroka);
             } else {
                 stroka = x + ' ' + y + ' ' + count
                 flowers.set('орхидеяжелтая', stroka);
              }
        }else if (sender == 29){
            pic.src = "{{ url_for("static", filename="flower/орхидеязеленая.png")}}";
             pic.onload = function () {
                 ctx.drawImage(pic, x, y, 25, 25); }

             if (flowers.has('орхидеязеленая') == true){
                 stroka = flowers.get('орхидеязеленая') + ' ' +  (x + ' ' + y + ' ' + count);
                 flowers.set('орхидеязеленая', stroka);
             } else {
                 stroka = x + ' ' + y + ' ' + count
                 flowers.set('орхидеязеленая', stroka);
              }
        }else if (sender == 30){
            pic.src = "{{ url_for("static", filename="flower/орхидеясиняя.png")}}";
             pic.onload = function () {
                 ctx.drawImage(pic, x, y, 25, 25); }

             if (flowers.has('орхидеясиняя') == true){
                 stroka = flowers.get('орхидеясиняя') + ' ' +  (x + ' ' + y + ' ' + count);
                 flowers.set('орхидеясиняя', stroka);
             } else {
                 stroka = x + ' ' + y + ' ' + count
                 flowers.set('орхидеясиняя', stroka);
              }
        }else if (sender == 31){
            pic.src = "{{ url_for("static", filename="flower/рускус.png")}}";
             pic.onload = function () {
                 ctx.drawImage(pic, x, y, 25, 25); }

             if (flowers.has('рускус') == true){
                 stroka = flowers.get('рускус') + ' ' +  (x + ' ' + y + ' ' + count);
                 flowers.set('рускус', stroka);
             } else {
                 stroka = x + ' ' + y + ' ' + count
                 flowers.set('рускус', stroka);
              }
        }else if (sender == 32){
            pic.src = "{{ url_for("static", filename="flower/эвкалипт.png")}}";
             pic.onload = function () {
                 ctx.drawImage(pic, x, y, 35, 35); }

             if (flowers.has('эвкалипт') == true){
                 stroka = flowers.get('эвкалипт') + ' ' +  (x + ' ' + y + ' ' + count);
                 flowers.set('эвкалипт', stroka);
             } else {
                 stroka = x + ' ' + y + ' ' + count
                 flowers.set('эвкалипт', stroka);
              }
        }else if (sender == 33){
            pic.src = "{{ url_for("static", filename="flower/фисташка.png")}}";
             pic.onload = function () {
                 ctx.drawImage(pic, x, y, 35, 35); }

             if (flowers.has('фисташка') == true){
                 stroka = flowers.get('фисташка') + ' ' +  (x + ' ' + y + ' ' + count);
                 flowers.set('фисташка', stroka);
             } else {
                 stroka = x + ' ' + y + ' ' + count
                 flowers.set('фисташка', stroka);
              }
        }else if (sender == 34){
            pic.src = "{{ url_for("static", filename="flower/папоротник.png")}}";
             pic.onload = function () {
                 ctx.drawImage(pic, x, y, 25, 25); }

             if (flowers.has('папоротник') == true){
                 stroka = flowers.get('папоротник') + ' ' +  (x + ' ' + y + ' ' + count);
                 flowers.set('папоротник', stroka);
             } else {
                 stroka = x + ' ' + y + ' ' + count
                 flowers.set('папоротник', stroka);
              }
        }else if (sender == 35){
            pic.src = "{{ url_for("static", filename="flower/гипсофила.png")}}";
             pic.onload = function () {
                 ctx.drawImage(pic, x, y, 25, 25); }

             if (flowers.has('гипсофила') == true){
                 stroka = flowers.get('гипсофила') + ' ' +  (x + ' ' + y + ' ' + count);
                 flowers.set('гипсофила', stroka);
             } else {
                 stroka = x + ' ' + y + ' ' + count
                 flowers.set('гипсофила', stroka);
              }
        }else if (sender == 36){
            pic.src = "{{ url_for("static", filename="flower/гиперикум.png")}}";
             pic.onload = function () {
                 ctx.drawImage(pic, x, y, 25, 25); }

             if (flowers.has('гиперикум') == true){
                 stroka = flowers.get('гиперикум') + ' ' +  (x + ' ' + y + ' ' + count);
                 flowers.set('гиперикум', stroka);
             } else {
                 stroka = x + ' ' + y + ' ' + count
                 flowers.set('гиперикум', stroka);
              }
        }


}



function minus(sender){
    var example = document.getElementById("example"),
       ctx     = example.getContext('2d');
       pic     = new Image();
    var stroka;
    stroka = '';
    var strr = new Array();
    var x;
    var y;
    var i;
    window.flowers;
    var countt;
    window.udol;

    if (sender == 1){
        if (flowers.has('розакрасная') == true){
            strr = flowers.get('розакрасная').split(' ')
            countt = strr[strr.length - 1]
            y = strr[strr.length - 2]
            x = strr[strr.length - 3]
            stroka = (strr.slice(0, strr.length - 3)).join(' ')
            flowers.set('розакрасная', stroka)
            pic.src = "{{ url_for("static", filename="flower/удаление/удалениероза.png")}}";
                    pic.onload = function () {
                        ctx.drawImage(pic, x, y, 25, 25); }
            udol.push(countt)
        }
    } else if (sender == 2){
        if (flowers.has('розамалиновая') == true){
            strr = flowers.get('розамалиновая').split(' ')
            countt = strr[strr.length - 1]
            y = strr[strr.length - 2]
            x = strr[strr.length - 3]
            stroka = (strr.slice(0, strr.length - 3)).join(' ')
            flowers.set('розамалиновая', stroka)

            pic.src = "{{ url_for("static", filename="flower/удаление/удалениероза.png")}}";
                    pic.onload = function () {
                        ctx.drawImage(pic, x, y, 25, 25); }
            udol.push(countt)
        }
    } else if (sender == 3){
        if (flowers.has('розарозовая') == true){
            strr = flowers.get('розарозовая').split(' ')
            countt = strr[strr.length - 1]
            y = strr[strr.length - 2]
            x = strr[strr.length - 3]
            stroka = (strr.slice(0, strr.length - 3)).join(' ')
            flowers.set('розарозовая', stroka)

            pic.src = "{{ url_for("static", filename="flower/удаление/удалениероза.png")}}";
                    pic.onload = function () {
                        ctx.drawImage(pic, x, y, 25, 25); }
            udol.push(countt)
        }
    }else if (sender == 4){
        if (flowers.has('розанежно-розовая') == true){
            strr = flowers.get('розанежно-розовая').split(' ')
            countt = strr[strr.length - 1]
            y = strr[strr.length - 2]
            x = strr[strr.length - 3]
            stroka = (strr.slice(0, strr.length - 3)).join(' ')
            flowers.set('розанежно-розовая', stroka)

            pic.src = "{{ url_for("static", filename="flower/удаление/удалениероза.png")}}";
                    pic.onload = function () {
                        ctx.drawImage(pic, x, y, 25, 25); }
            udol.push(countt)
        }
    }else if (sender == 5){
        if (flowers.has('розабелая') == true){
            strr = flowers.get('розабелая').split(' ')
            countt = strr[strr.length - 1]
            y = strr[strr.length - 2]
            x = strr[strr.length - 3]
            stroka = (strr.slice(0, strr.length - 3)).join(' ')
            flowers.set('розабелая', stroka)

            pic.src = "{{ url_for("static", filename="flower/удаление/удалениероза.png")}}";
                    pic.onload = function () {
                        ctx.drawImage(pic, x, y, 25, 25); }
            udol.push(countt)
        }
    }else if (sender == 6){
        if (flowers.has('розаперсик') == true){
            strr = flowers.get('розаперсик').split(' ')
            countt = strr[strr.length - 1]
            y = strr[strr.length - 2]
            x = strr[strr.length - 3]
            stroka = (strr.slice(0, strr.length - 3)).join(' ')
            flowers.set('розаперсик', stroka)
            pic.src = "{{ url_for("static", filename="flower/удаление/удалениероза.png")}}";
                    pic.onload = function () {
                        ctx.drawImage(pic, x, y, 25, 25); }
            udol.push(countt)
        }
    }else if (sender == 7){
        if (flowers.has('хризантемарозовая') == true){
            strr = flowers.get('хризантемарозовая').split(' ')
            countt = strr[strr.length - 1]
            y = strr[strr.length - 2]
            x = strr[strr.length - 3]
            stroka = (strr.slice(0, strr.length - 3)).join(' ')
            flowers.set('хризантемарозовая', stroka)
            pic.src = "{{ url_for("static", filename="flower/удаление/удалениехризантема.png")}}";
                    pic.onload = function () {
                        ctx.drawImage(pic, x, y, 25, 25); }
            udol.push(countt)
        }
    }else if (sender == 8){
        if (flowers.has('хризантеманежно-розовая') == true){
            strr = flowers.get('хризантеманежно-розовая').split(' ')
            countt = strr[strr.length - 1]
            y = strr[strr.length - 2]
            x = strr[strr.length - 3]
            stroka = (strr.slice(0, strr.length - 3)).join(' ')
            flowers.set('хризантеманежно-розовая', stroka)
            pic.src = "{{ url_for("static", filename="flower/удаление/удалениехризантема.png")}}";
                    pic.onload = function () {
                        ctx.drawImage(pic, x, y, 25, 25); }
            udol.push(countt)
        }
    }else if (sender == 9){
        if (flowers.has('хризантемаперсик') == true){
            strr = flowers.get('хризантемаперсик').split(' ')
            countt = strr[strr.length - 1]
            y = strr[strr.length - 2]
            x = strr[strr.length - 3]
            stroka = (strr.slice(0, strr.length - 3)).join(' ')
            flowers.set('хризантемаперсик', stroka)
            pic.src = "{{ url_for("static", filename="flower/удаление/удалениехризантема.png")}}";
                    pic.onload = function () {
                        ctx.drawImage(pic, x, y, 25, 25); }
            udol.push(countt)
        }
    }else if (sender == 10){
        if (flowers.has('хризантемабелая') == true){
            strr = flowers.get('хризантемабелая').split(' ')
            countt = strr[strr.length - 1]
            y = strr[strr.length - 2]
            x = strr[strr.length - 3]
            stroka = (strr.slice(0, strr.length - 3)).join(' ')
            flowers.set('хризантемабелая', stroka)
            pic.src = "{{ url_for("static", filename="flower/удаление/удалениехризантема.png")}}";
                    pic.onload = function () {
                        ctx.drawImage(pic, x, y, 25, 25); }
            udol.push(countt)
        }
    }else if (sender == 11){
        if (flowers.has('хризантемазеленая') == true){
            strr = flowers.get('хризантемазеленая').split(' ')
            countt = strr[strr.length - 1]
            y = strr[strr.length - 2]
            x = strr[strr.length - 3]
            stroka = (strr.slice(0, strr.length - 3)).join(' ')
            flowers.set('хризантемазеленая', stroka)
            pic.src = "{{ url_for("static", filename="flower/удаление/удалениехризантема.png")}}";
                    pic.onload = function () {
                        ctx.drawImage(pic, x, y, 25, 25); }
            udol.push(countt)
        }
    }else if (sender == 12){
        if (flowers.has('хризантемасиняя') == true){
            strr = flowers.get('хризантемасиняя').split(' ')
            countt = strr[strr.length - 1]
            y = strr[strr.length - 2]
            x = strr[strr.length - 3]
            stroka = (strr.slice(0, strr.length - 3)).join(' ')
            flowers.set('хризантемасиняя', stroka)
            pic.src = "{{ url_for("static", filename="flower/удаление/удалениехризантема.png")}}";
                    pic.onload = function () {
                        ctx.drawImage(pic, x, y, 25, 25); }
            udol.push(countt)
        }
    }else if (sender == 13){
        if (flowers.has('альстремериятемно-розовая') == true){
            strr = flowers.get('альстремериятемно-розовая').split(' ')
            countt = strr[strr.length - 1]
            y = strr[strr.length - 2]
            x = strr[strr.length - 3]
            stroka = (strr.slice(0, strr.length - 3)).join(' ')
            flowers.set('альстремериятемно-розовая', stroka)
            pic.src = "{{ url_for("static", filename="flower/удаление/удалениеальстремериятемная.png")}}";
                    pic.onload = function () {
                        ctx.drawImage(pic, x, y, 25, 25); }
            udol.push(countt)
        }
    }else if (sender == 14){
        if (flowers.has('альстремериярозовая') == true){
            strr = flowers.get('альстремериярозовая').split(' ')
            countt = strr[strr.length - 1]
            y = strr[strr.length - 2]
            x = strr[strr.length - 3]
            stroka = (strr.slice(0, strr.length - 3)).join(' ')
            flowers.set('альстремериярозовая', stroka)
            pic.src = "{{ url_for("static", filename="flower/удаление/удалениеальстремериярозовая.png")}}";
                    pic.onload = function () {
                        ctx.drawImage(pic, x, y, 25, 25); }
            udol.push(countt)
        }
    }else if (sender == 15){
        if (flowers.has('альстремерияоранжевая') == true){
            strr = flowers.get('альстремерияоранжевая').split(' ')
            countt = strr[strr.length - 1]
            y = strr[strr.length - 2]
            x = strr[strr.length - 3]
            stroka = (strr.slice(0, strr.length - 3)).join(' ')
            flowers.set('альстремерияоранжевая', stroka)
            pic.src = "{{ url_for("static", filename="flower/удаление/удалениеальстремерияоранжевая.png")}}";
                    pic.onload = function () {
                        ctx.drawImage(pic, x, y, 25, 25); }
            udol.push(countt)
        }
    }else if (sender == 16){
        if (flowers.has('альстремерияжелтая') == true){
            strr = flowers.get('альстремерияжелтая').split(' ')
            countt = strr[strr.length - 1]
            y = strr[strr.length - 2]
            x = strr[strr.length - 3]
            stroka = (strr.slice(0, strr.length - 3)).join(' ')
            flowers.set('альстремерияжелтая', stroka)
            pic.src = "{{ url_for("static", filename="flower/удаление/удалениеальстремерияжелтая.png")}}";
                    pic.onload = function () {
                        ctx.drawImage(pic, x, y, 25, 25); }
            udol.push(countt)
        }
    }else if (sender == 17){
        if (flowers.has('альстремериябелая') == true){
            strr = flowers.get('альстремериябелая').split(' ')
            countt = strr[strr.length - 1]
            y = strr[strr.length - 2]
            x = strr[strr.length - 3]
            stroka = (strr.slice(0, strr.length - 3)).join(' ')
            flowers.set('альстремериябелая', stroka)
            pic.src = "{{ url_for("static", filename="flower/удаление/удалениеальстремериябелая.png")}}";
                    pic.onload = function () {
                        ctx.drawImage(pic, x, y, 25, 25); }
            udol.push(countt)
        }
    }else if (sender == 18){
        if (flowers.has('альстремерияфиолетовая') == true){
            strr = flowers.get('альстремерияфиолетовая').split(' ')
            countt = strr[strr.length - 1]
            y = strr[strr.length - 2]
            x = strr[strr.length - 3]
            stroka = (strr.slice(0, strr.length - 3)).join(' ')
            flowers.set('альстремерияфиолетовая', stroka)
            pic.src = "{{ url_for("static", filename="flower/удаление/удалениеальстремерияфиолетовая.png")}}";
                    pic.onload = function () {
                        ctx.drawImage(pic, x, y, 25, 25); }
            udol.push(countt)
        }
    }else if (sender == 19){
        if (flowers.has('пионбелый') == true){
            strr = flowers.get('розаперсик').split(' ')
            countt = strr[strr.length - 1]
            y = strr[strr.length - 2]
            x = strr[strr.length - 3]
            stroka = (strr.slice(0, strr.length - 3)).join(' ')
            flowers.set('пионбелый', stroka)
            pic.src = "{{ url_for("static", filename="flower/удаление/удалениепион.png")}}";
                    pic.onload = function () {
                        ctx.drawImage(pic, x, y, 25, 25); }
            udol.push(countt)
        }
    }else if (sender == 20){
        if (flowers.has('пионрозовый') == true){
            strr = flowers.get('пионрозовый').split(' ')
            countt = strr[strr.length - 1]
            y = strr[strr.length - 2]
            x = strr[strr.length - 3]
            stroka = (strr.slice(0, strr.length - 3)).join(' ')
            flowers.set('пионрозовый', stroka)
            pic.src = "{{ url_for("static", filename="flower/удаление/удалениепион.png")}}";
                    pic.onload = function () {
                        ctx.drawImage(pic, x, y, 25, 25); }
            udol.push(countt)
        }
    }else if (sender == 21){
        if (flowers.has('пионярко-розовый') == true){
            strr = flowers.get('пионярко-розовый').split(' ')
            countt = strr[strr.length - 1]
            y = strr[strr.length - 2]
            x = strr[strr.length - 3]
            stroka = (strr.slice(0, strr.length - 3)).join(' ')
            flowers.set('пионярко-розовый', stroka)
            pic.src = "{{ url_for("static", filename="flower/удаление/удалениепион.png")}}";
                    pic.onload = function () {
                        ctx.drawImage(pic, x, y, 25, 25); }
            udol.push(countt)
        }
    }else if (sender == 22){
        if (flowers.has('пионкрасный') == true){
            strr = flowers.get('пионкрасный').split(' ')
            countt = strr[strr.length - 1]
            y = strr[strr.length - 2]
            x = strr[strr.length - 3]
            stroka = (strr.slice(0, strr.length - 3)).join(' ')
            flowers.set('пионкрасный', stroka)
            pic.src = "{{ url_for("static", filename="flower/удаление/удалениепион.png")}}";
                    pic.onload = function () {
                        ctx.drawImage(pic, x, y, 25, 25); }
            udol.push(countt)
        }
    }else if (sender == 23){
        if (flowers.has('пионжелтый') == true){
            strr = flowers.get('пионжелтый').split(' ')
            countt = strr[strr.length - 1]
            y = strr[strr.length - 2]
            x = strr[strr.length - 3]
            stroka = (strr.slice(0, strr.length - 3)).join(' ')
            flowers.set('пионжелтый', stroka)
            pic.src = "{{ url_for("static", filename="flower/удаление/удалениепион.png")}}";
                    pic.onload = function () {
                        ctx.drawImage(pic, x, y, 25, 25); }
            udol.push(countt)
        }
    }else if (sender == 24){
        if (flowers.has('пионсиний') == true){
            strr = flowers.get('пионсиний').split(' ')
            countt = strr[strr.length - 1]
            y = strr[strr.length - 2]
            x = strr[strr.length - 3]
            stroka = (strr.slice(0, strr.length - 3)).join(' ')
            flowers.set('пионсиний', stroka)
            pic.src = "{{ url_for("static", filename="flower/удаление/удалениепион.png")}}";
                    pic.onload = function () {
                        ctx.drawImage(pic, x, y, 25, 25); }
            udol.push(countt)
        }
    }else if (sender == 25){
        if (flowers.has('орхидеябелая') == true){
            strr = flowers.get('орхидеябелая').split(' ')
            countt = strr[strr.length - 1]
            y = strr[strr.length - 2]
            x = strr[strr.length - 3]
            stroka = (strr.slice(0, strr.length - 3)).join(' ')
            flowers.set('орхидеябелая', stroka)
            pic.src = "{{ url_for("static", filename="flower/удаление/удалениеорхидеябелая.png")}}";
                    pic.onload = function () {
                        ctx.drawImage(pic, x, y, 25, 25); }
            udol.push(countt)
        }
    }else if (sender == 26){
        if (flowers.has('орхидеярозовая') == true){
            strr = flowers.get('орхидеярозовая').split(' ')
            countt = strr[strr.length - 1]
            y = strr[strr.length - 2]
            x = strr[strr.length - 3]
            stroka = (strr.slice(0, strr.length - 3)).join(' ')
            flowers.set('орхидеярозовая', stroka)
            pic.src = "{{ url_for("static", filename="flower/удаление/удалениеорхидеярозовая.png")}}";
                    pic.onload = function () {
                        ctx.drawImage(pic, x, y, 25, 25); }
            udol.push(countt)
        }
    }else if (sender == 27){
        if (flowers.has('орхидеямалиновая') == true){
            strr = flowers.get('орхидеямалиновая').split(' ')
            countt = strr[strr.length - 1]
            y = strr[strr.length - 2]
            x = strr[strr.length - 3]
            stroka = (strr.slice(0, strr.length - 3)).join(' ')
            flowers.set('орхидеямалиновая', stroka)
            pic.src = "{{ url_for("static", filename="flower/удаление/удалениеорхидеямалиновая.png")}}";
                    pic.onload = function () {
                        ctx.drawImage(pic, x, y, 25, 25); }
            udol.push(countt)
        }
    }else if (sender == 28){
        if (flowers.has('орхидеяжелтая') == true){
            strr = flowers.get('орхидеяжелтая').split(' ')
            countt = strr[strr.length - 1]
            y = strr[strr.length - 2]
            x = strr[strr.length - 3]
            stroka = (strr.slice(0, strr.length - 3)).join(' ')
            flowers.set('орхидеяжелтая', stroka)
            pic.src = "{{ url_for("static", filename="flower/удаление/удалениеорхидеяжелтая.png")}}";
                    pic.onload = function () {
                        ctx.drawImage(pic, x, y, 25, 25); }
            udol.push(countt)
        }
    }else if (sender == 29){
        if (flowers.has('орхидеязеленая') == true){
            strr = flowers.get('орхидеязеленая').split(' ')
            countt = strr[strr.length - 1]
            y = strr[strr.length - 2]
            x = strr[strr.length - 3]
            stroka = (strr.slice(0, strr.length - 3)).join(' ')
            flowers.set('орхидеязеленая', stroka)
            pic.src = "{{ url_for("static", filename="flower/удаление/удалениеорхидеязеленая.png")}}";
                    pic.onload = function () {
                        ctx.drawImage(pic, x, y, 25, 25); }
            udol.push(countt)
        }
    }else if (sender == 30){
        if (flowers.has('орхидеясиняя') == true){
            strr = flowers.get('орхидеясиняя').split(' ')
            countt = strr[strr.length - 1]
            y = strr[strr.length - 2]
            x = strr[strr.length - 3]
            stroka = (strr.slice(0, strr.length - 3)).join(' ')
            flowers.set('орхидеясиняя', stroka)
            pic.src = "{{ url_for("static", filename="flower/удаление/удалениеорхидеясиняя.png")}}";
                    pic.onload = function () {
                        ctx.drawImage(pic, x, y, 25, 25); }
            udol.push(countt)
        }
    }else if (sender == 31){
        if (flowers.has('рускус') == true){
            strr = flowers.get('рускус').split(' ')
            countt = strr[strr.length - 1]
            y = strr[strr.length - 2]
            x = strr[strr.length - 3]
            stroka = (strr.slice(0, strr.length - 3)).join(' ')
            flowers.set('рускус', stroka)
            pic.src = "{{ url_for("static", filename="flower/удаление/удалениерускус.png")}}";
                    pic.onload = function () {
                        ctx.drawImage(pic, x, y, 25, 25); }
            udol.push(countt)
        }
    }else if (sender == 32){
        if (flowers.has('экалипт') == true){
            strr = flowers.get('экалипт').split(' ')
            countt = strr[strr.length - 1]
            y = strr[strr.length - 2]
            x = strr[strr.length - 3]
            stroka = (strr.slice(0, strr.length - 3)).join(' ')
            flowers.set('экалипт', stroka)
            pic.src = "{{ url_for("static", filename="flower/удаление/удалениеэвкалипт.png")}}";
                    pic.onload = function () {
                        ctx.drawImage(pic, x, y, 25, 25); }
            udol.push(countt)
        }
    }else if (sender == 33){
        if (flowers.has('фисташка') == true){
            strr = flowers.get('фисташка').split(' ')
            countt = strr[strr.length - 1]
            y = strr[strr.length - 2]
            x = strr[strr.length - 3]
            stroka = (strr.slice(0, strr.length - 3)).join(' ')
            flowers.set('фисташка', stroka)
            pic.src = "{{ url_for("static", filename="flower/удаление/удалениефисташка.png")}}";
                    pic.onload = function () {
                        ctx.drawImage(pic, x, y, 25, 25); }
            udol.push(countt)
        }
    }else if (sender == 34){
        if (flowers.has('папоротник') == true){
            strr = flowers.get('папоротник').split(' ')
            countt = strr[strr.length - 1]
            y = strr[strr.length - 2]
            x = strr[strr.length - 3]
            stroka = (strr.slice(0, strr.length - 3)).join(' ')
            flowers.set('папоротник', stroka)
            pic.src = "{{ url_for("static", filename="flower/удаление/удалениепапоротник.png")}}";
                    pic.onload = function () {
                        ctx.drawImage(pic, x, y, 25, 25); }
            udol.push(countt)
        }
    }else if (sender == 35){
        if (flowers.has('гипсофила') == true){
            strr = flowers.get('гипсофила').split(' ')
            countt = strr[strr.length - 1]
            y = strr[strr.length - 2]
            x = strr[strr.length - 3]
            stroka = (strr.slice(0, strr.length - 3)).join(' ')
            flowers.set('гипсофила', stroka)
            pic.src = "{{ url_for("static", filename="flower/удаление/удалениегипсофила.png")}}";
                    pic.onload = function () {
                        ctx.drawImage(pic, x, y, 25, 25); }
            udol.push(countt)
        }
    }else if (sender == 36){
        if (flowers.has('гиперикум') == true){
            strr = flowers.get('гиперикум').split(' ')
            countt = strr[strr.length - 1]
            y = strr[strr.length - 2]
            x = strr[strr.length - 3]
            stroka = (strr.slice(0, strr.length - 3)).join(' ')
            flowers.set('гиперикум', stroka)
            pic.src = "{{ url_for("static", filename="flower/удаление/удалениегиперикум.png")}}";
                    pic.onload = function () {
                        ctx.drawImage(pic, x, y, 25, 25); }
            udol.push(countt)
        }
    }
}
function clear(sender){
    var example = document.getElementById("example"),
       ctx     = example.getContext('2d');
       pic     = new Image();
    pic.src = "{{ url_for("static", filename="flower/удаление/ree.jpg")}}";
                    pic.onload = function () {
                        ctx.drawImage(pic, 0, 0, 320, 350); }
}