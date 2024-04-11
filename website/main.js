const input = document.getElementById("input");
const output = document.getElementById("output");
const copyBtn = document.getElementById("copyBtn");
let currentCopy = "";
var res = "";

const match = `\`\`
1¡
2™
3£
4¢
5∞
6§
7¶
8•
9ª
0º
-–
=≠
qœ
w∑
e´
r®
t†
y¥
u¨
iˆ
oø
pπ
[“
]‘
\\«
aå
sß
d∂
fƒ
g©
h˙
j∆
k˚
l¬
;…
'æ
zΩ
x≈
cç
v√
b∫
n˜
mµ
,≤
.≥
/÷
~~
!⁄
@€
#‹
$›
%ﬁ
^ﬂ
&‡
*°
(·
)‚
QŒ
W„
E´
R‰
Tˇ
YÁ
U¨
Iˆ
OØ
P∏
{”
}’
|»
AÅ
SÍ
DÎ
FÏ
G˝
HÓ
JÔ
K
LÒ
:Ú
"Æ
Z¸
X˛
CÇ
V◊
Bı
N˜
MÂ
<¯
>˘
?¿
  
\n\n`.split("\n");

function convert(input, mode) {
    input = input.split("");
    var result = "";
    var fromIndex = 0;
    var toIndex = 0;
    if (mode) {
        toIndex = 1;
    } else {
        fromIndex = 1;
    }
    // loop through each char
    input.forEach((char) => {
        // match this char
        for (var i = 0; i < match.length; i++) {
            if (char == match[i][fromIndex]) {
                result += match[i][toIndex];
                return;
            }
        }
    })
    return result;
}

function autoConvert() {
    var mode = null;
    for (var i = 0; i < input.value.length; i++) {
        if (mode != null) {
            break;
        }
        for (var j = 0; j < match.length; j++) {
            if (match[j][0] == input.value[i]) mode = true;
            if (match[j][1] == input.value[i]) mode = false;
        }
    }
    res = convert(input.value, mode);
    output.innerText = res;

    // for css
    if (input.value != '') {
        console.log(input.value)
        output.classList.add('havOutput');
    } else {
        output.classList.remove('havOutput');
    }
    if (currentCopy != res) {
        copyBtn.removeAttribute('disabled', true)
    } else {
        console.log(currentCopy, res)
    }
    return res
}



copyBtn.onclick = event => {
    navigator.clipboard.writeText(output.value);
    currentCopy = res;
    copyBtn.setAttribute('disabled', true)
}

input.oninput = event => {
    autoConvert();
}