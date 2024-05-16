function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6HiPHKRf3g5":
        Script1();
        break;
      case "68e1y9cHoQB":
        Script2();
        break;
      case "6lQbaNLhujD":
        Script3();
        break;
      case "6bcKCHsCNTg":
        Script4();
        break;
  }
}

function Script1()
{
  var player = GetPlayer();
var ans = player.GetVar('B1_a_o1');             //thay giá trị biến ở đây
var check = false;

ans = ans.trim();
ans = ans.replace(/\s+/g, ' ');
player.SetVar('B1_a_o1', ans);                    //thay giá trị biến ở đây
ans = ans.replace(/\s+/g, '');
if (/[a-zA-Z]/.test(ans)) {
    check = true;
} else {
    var result = parseFloat(ans.replace(',', '.'));

    function addSpaceSeparators(number) {
        var parts = number.toString().split('.');
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
        return parts.join('.');
    }

    var formattedResult = addSpaceSeparators(result);

    if (ans.includes(',')) {
        var Result1 = formattedResult.replace('.', ',');
        player.SetVar('B1_a_o1', Result1);              //thay giá trị biến ở đây
    } else {
        player.SetVar('B1_a_o1', formattedResult); //thay giá trị biến ở đây
    }
}

}

function Script2()
{
  var player = GetPlayer();
var ans = player.GetVar('B1_a_o2');             //thay giá trị biến ở đây
var check = false;

ans = ans.trim();
ans = ans.replace(/\s+/g, ' ');
player.SetVar('B1_a_o2', ans);                    //thay giá trị biến ở đây
ans = ans.replace(/\s+/g, '');
if (/[a-zA-Z]/.test(ans)) {
    check = true;
} else {
    var result = parseFloat(ans.replace(',', '.'));

    function addSpaceSeparators(number) {
        var parts = number.toString().split('.');
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
        return parts.join('.');
    }

    var formattedResult = addSpaceSeparators(result);

    if (ans.includes(',')) {
        var Result1 = formattedResult.replace('.', ',');
        player.SetVar('B1_a_o2', Result1);              //thay giá trị biến ở đây
    } else {
        player.SetVar('B1_a_o2', formattedResult); //thay giá trị biến ở đây
    }
}

}

function Script3()
{
  var player = GetPlayer();
var ans = player.GetVar('B1_b');             //thay giá trị biến ở đây
var check = false;

ans = ans.trim();
ans = ans.replace(/\s+/g, ' ');
player.SetVar('B1_b', ans);                    //thay giá trị biến ở đây
ans = ans.replace(/\s+/g, '');
if (/[a-zA-Z]/.test(ans)) {
    check = true;
} else {
    var result = parseFloat(ans.replace(',', '.'));

    function addSpaceSeparators(number) {
        var parts = number.toString().split('.');
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
        return parts.join('.');
    }

    var formattedResult = addSpaceSeparators(result);

    if (ans.includes(',')) {
        var Result1 = formattedResult.replace('.', ',');
        player.SetVar('B1_b', Result1);              //thay giá trị biến ở đây
    } else {
        player.SetVar('B1_b', formattedResult); //thay giá trị biến ở đây
    }
}

}

function Script4()
{
  var player = GetPlayer();
var ans = player.GetVar('B1_c');             //thay giá trị biến ở đây
var check = false;

ans = ans.trim();
ans = ans.replace(/\s+/g, ' ');
player.SetVar('B1_c', ans);                    //thay giá trị biến ở đây
ans = ans.replace(/\s+/g, '');
if (/[a-zA-Z]/.test(ans)) {
    check = true;
} else {
    var result = parseFloat(ans.replace(',', '.'));

    function addSpaceSeparators(number) {
        var parts = number.toString().split('.');
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
        return parts.join('.');
    }

    var formattedResult = addSpaceSeparators(result);

    if (ans.includes(',')) {
        var Result1 = formattedResult.replace('.', ',');
        player.SetVar('B1_c', Result1);              //thay giá trị biến ở đây
    } else {
        player.SetVar('B1_c', formattedResult); //thay giá trị biến ở đây
    }
}

}

