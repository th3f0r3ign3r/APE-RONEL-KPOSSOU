(function($) // début du pluggin
{
    $.fn.game2048 = function() //function game2048 du pluggin
    {
        // génération du tableau (table, tr, td) vide (rempli de zéros)
        function generate_map()
        {
            var table = $('<table></table>');
            for (var y = 0; y < 4; y++)
            {
                var ligne = $('<tr></tr>');
                for (var x = 0; x < 4; x++)
                {
                    var cases = $('<td></td>').attr('x', x).attr('y', y).attr('nbr', "");
                    ligne.append(cases);
                }
                table.append(ligne);
            }
            return table;
        }

        // génération d'un certain nombre de cases (argument cases) aléatoirement placées sur les cases d'attribut 'nbr=0'
        function generate_case(cases)
        {
            for (var i = 0; i < cases; i++)
            {
                var x = Math.floor((Math.random() * 4));
                var y = Math.floor((Math.random() * 4));
                var value =  2 * (Math.floor((Math.random() * 2) + 1));
                var elem = $('[x="' + x + '"][y="' + y + '"][nbr=""]');

                if (value === 4 && Math.random() > 0.5)
                    value = 2;
                if (!elem[0])
                    generate_case(1);
                else {
                    elem.attr('nbr', value);
                    elem.text(value);
                }
            }
        }

        // fonction de gestion des évenements (appuie de touches)
        $('html').keydown(function(event) {
            var table = $('table');
            switch (event["key"]) {
              case "ArrowLeft":
                /./
                console.log("Left");
                break;
              case "ArrowUp":
                // foreach cols if two same number next to each other, add them and if there is nothing after, move the number to the top
                for (var x = 0; x < 4; x++) {
                    var last = 0;
                    for (var y = 0; y < 4; y++) {
                        var elem = $('[x="' + x + '"][y="' + y + '"]');
                        if (elem.attr("nbr") !== "") {
                        if (elem.attr("nbr") === last) {
                            elem.attr("nbr", 2 * last);
                            elem.text(2 * last);
                            last = 0;
                        } else last = elem.attr("nbr");
                        }
                    }
                    }
                console.log("Up");
                break;
              case "ArrowRight":
                // foreach row if two same number next to each other, add them and if there is nothing after, move the number to the end right
                for (var y = 0; y < 4; y++) {
                  var last = 0;
                  for (var x = 0; x < 4; x++) {
                    var elem = $('[x="' + x + '"][y="' + y + '"]');
                    if (elem.attr("nbr") !== "") {
                      if (elem.attr("nbr") === last) {
                        elem.attr("nbr", 2 * last);
                        elem.text(2 * last);
                        last = 0;
                      } else last = elem.attr("nbr");
                    }
                  }
                }
                console.log("Right");
                break;
              case "ArrowDown":
                // foreach cols if two same number next to each other, add them and if there is nothing after, move the number to the end
                for (var x = 0; x < 4; x++) {
                  var last = 0;
                  for (var y = 0; y < 4; y++) {
                    var elem = $('[x="' + x + '"][y="' + y + '"]');
                    if (elem.attr("nbr") !== "") {
                      if (elem.attr("nbr") === last) {
                        elem.attr("nbr", 2 * last);
                        elem.text(2 * last);
                        last = 0;
                      } else last = elem.attr("nbr");
                    }
                  }
                }
                console.log("Down");
                break;
            }
        });

        // début du code lancé
        $(this).append(generate_map()); // génération du tableau vide
        generate_case(2); // génération aléatoire de deux cases pleines (2 ou 4)
    }

})(jQuery); // fin du pluggin