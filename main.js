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
?¿`.split("\n");
const modeBtn = document.getElementById("modeBtn");
const convertBtn = document.getElementById("convertBtn");
const input = document.getElementById("input");
const output = document.getElementById("output");
const copyBtn = document.getElementById("copyBtn");
var mode = true;

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

modeBtn.addEventListener("click", () => {
    mode = !mode;
    if (mode) {
        modeBtn.innerText = "normal text > encrypted text";
    } else {
        modeBtn.innerText = "encrypted text > normal text";
    }
});

convertBtn.addEventListener("click", () => {
    var res = convert(input.value, mode);
    output.innerText = res;
});

copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(output.innerText);
});