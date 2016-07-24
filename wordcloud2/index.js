'use strict';

var examples = {
  'taiwan': {
    list: (function() {
      var names = ['台灣', '台湾', 'Taiwan', '臺灣'];

      var str = ['40 台灣'];
      var i = 20;
      while (--i) {
        names.forEach(function(name) {
          str.push(i + ' ' + name);
        });
      }

      return str.join('\n');
    }()),

    option: '{\n' +
            '  gridSize: 4,\n' +
            '  weightFactor: 1,\n' +
            '  fontFamily: \'Hiragino Mincho Pro, serif\',\n' +
            '  color: \'random-dark\',\n' +
            '  backgroundColor: \'#f0f0f0\',\n' +
            '  rotateRatio: 0,\n' +
            '  ellipticity: 1,\n' +
            '  shape: function(theta) {\n' +
            '    /' + '/ Function for simple shapes can be generated manually with http://timdream.org/wordcloud2.js/shape-generator.html.\n' +
            '    var max = 1026;\n' +
            '    var leng = [290,296,299,301,305,309,311,313,315,316,318,321,325,326,327,328,330,330,331,334,335,338,340,343,343,343,346,349,353,356,360,365,378,380,381,381,381,391,394,394,395,396,400,400,408,405,400,400,400,401,401,403,404,405,408,410,413,414,414,415,416,418,420,423,425,430,435,440,446,456,471,486,544,541,533,532,533,537,540,537,535,535,533,546,543,539,531,529,530,533,529,528,529,522,521,520,509,520,520,533,522,523,526,528,527,532,537,539,539,540,539,538,533,532,524,523,513,503,482,467,443,438,435,431,429,427,426,422,422,426,426,423,419,414,410,407,404,401,396,393,393,395,392,389,388,383,379,378,376,375,372,369,368,359,343,335,332,327,323,314,308,300,294,290,288,289,290,282,275,269,263,257,242,244,237,235,235,232,231,225,224,221,219,218,218,217,217,215,215,214,214,214,214,214,215,215,216,213,213,212,211,209,207,205,204,206,205,205,205,205,204,203,203,201,200,199,197,195,193,192,192,190,189,187,186,186,183,183,182,182,181,179,180,179,178,178,177,177,176,176,176,176,175,175,175,175,175,175,174,174,175,175,175,175,176,177,176,177,177,177,180,179,179,180,179,179,179,178,178,178,178,177,178,177,179,179,179,180,180,181,181,181,183,183,184,184,186,187,189,189,192,195,193,194,193,194,194,191,189,196,195,196,199,200,201,200,200,200,200,202,203,204,205,210,210,210,211,210,214,218,219,226,231,233,235,235,235,235,236,238,240,241,243,245,246,249,249,249,255,257,264,271,272,274,275,276,276,278,285,292,294,296,301,304,313,320,330,333,337,342,345,348,352,358,363,376,386,379,386,387,387,399,402,402,410,415,420,425,430,429,436,435,438,442,447,451,454,455,474,477,481,484,492,486,488,501,509,544,553,552,553,564,579,593,600,627,637,644,644,643,641,640,641,641,643,643,648,651,653,659,671,678,685,690,698,705,711,715,722,729,738,760,770,777,780,788,792,796,800,803,806,808,810,809,815,819,821,823,826,828,830,834,838,849,854,861,884,891,909,932,996,1026,1016,1011,1015,1018,999,987,827,806,779,754,734,727,700,690,686,682,677,675,672,668,665,664,658,641,614,610,609,609,608,596,591,583,577,576,570,561,553,547,539,531,526,525,524,519,513,502,484,480,478,470,464,458,453,450,448,448,445,441,435,431,423,420,411,408,405,398,388,385,385,385,383,379,372,370,369,368,366,367,371,370,367,365,345,343,342,340,336,334,331,329,326,323,323,322,321,321,319,318,315,313,312,309,308,307,306,305,304,303,303,302,302,300,299,299,297,296,294,292,291,290,289,290,291,291,289,289,285,285,286,287,287,288,288,288,288,288,289,288,287,279,275,273,272,272,272,274,274,274,275,275,277,281,284,285,286,286,286,283,280,279,279,280,281,283,284,288,291];\n\n' +
            '    return leng[(theta / (2 * Math.PI)) * leng.length | 0] / max;\n' +
            '  }\n'+
            '}'
  },
  'web-tech': {
    list: '26 Web Technologies\n20 HTML\n20 <canvas>\n' +
          '15 CSS\n15 JavaScript\n12 Document Object Model\n12 <audio>\n12 <video>\n12 Web Workers\n12 XMLHttpRequest\n12 SVG\n' +
          '9 JSON.parse()\n9 Geolocation\n9 data attribute\n9 transform\n9 transition\n9 animation\n' +
          '7 setTimeout\n7 @font-face\n7 Typed Arrays\n7 FileReader API\n7 FormData\n7 IndexedDB\n' +
          '7 getUserMedia()\n7 postMassage()\n7 CORS\n6 strict mode\n6 calc()\n6 supports()\n' +
          '6 media queries\n6 full screen\n6 notification\n6 orientation\n6 requestAnimationFrame\n' +
          '5 border-radius\n5 box-sizing\n5 rgba()\n5 text-shadow\n5 box-shadow\n5 flexbox\n5 viewpoint',
    option: '{\n' +
            '  gridSize: 18,\n' +
            '  weightFactor: 3,\n' +
            '  fontFamily: \'Finger Paint, cursive, sans-serif\',\n' +
            '  color: \'#f0f0c0\',\n' +
            '  hover: window.drawBox,\n' +
            '  click: function(item) {\n' +
            '    alert(item[0] + \': \' + item[1]);\n' +
            '  },\n' +
            '  backgroundColor: \'#001f00\'\n' +
            '}',
    fontCSS: 'https://fonts.googleapis.com/css?family=Finger+Paint'
  },
  'les-miz': {
    list: '30 Les Misérables\n20 Victor Hugo\n15 Jean Valjean\n15 Javert\n15 Fantine\n' +
          '15 Cosette\n12 Éponine\n12 Marius\n12 Enjolras\n10 Thénardiers\n10 Gavroche\n' +
          '10 Bishop Myriel\n10 Patron-Minette\n10 God\n8 ABC Café\n8 Paris\n8 Digne\n' +
          '8 Elephant of the Bastille\n5 silverware\n5 Bagne of Toulon\n5 loaf of bread\n' +
          '5 Rue Plumet\n5 revolution\n5 barricade\n4 sewers\n4 Fex urbis lex orbis',
    option: '{\n' +
          '  gridSize: 18,\n' +
          '  weightFactor: 3,\n' +
          '  fontFamily: \'Average, Times, serif\',\n' +
          '  color: function() {\n' +
          '    return ([\'#d0d0d0\', \'#e11\', \'#44f\'])[Math.floor(Math.random() * 3)]\n' +
          '  },\n' +
          '  backgroundColor: \'#333\'\n' +
          '}',
    fontCSS: 'https://fonts.googleapis.com/css?family=Average'
  },
  'red-chamber': {
    list: '6 紅樓夢\n3 賈寶玉\n3 林黛玉\n3 薛寶釵\n3 王熙鳳\n3 李紈\n3 賈元春\n3 賈迎春\n' +
          '3 賈探春\n3 賈惜春\n3 秦可卿\n3 賈巧姐\n3 史湘雲\n3 妙玉\n2 賈政\n2 賈赦\n' +
          '2 賈璉\n2 賈珍\n2 賈環\n2 賈母\n2 王夫人\n2 薛姨媽\n2 尤氏\n2 平兒\n2 鴛鴦\n' +
          '2 襲人\n2 晴雯\n2 香菱\n2 紫鵑\n2 麝月\n2 小紅\n2 金釧\n2 甄士隱\n2 賈雨村',
    option: '{\n' +
            '  gridSize: 8,\n' +
            '  weightFactor: 16,\n' +
            '  fontFamily: \'Hiragino Mincho Pro, serif\',\n' +
            '  color: \'random-dark\',\n' +
            '  backgroundColor: \'#f0f0f0\',\n' +
            '  rotateRatio: 0\n' +
            '}'
  },
  'quick-fox': {
    list: '2 The\n2 quick\n3 brown\n5 fox\n3 jumps\n3 over\n3.5 the\n3 lazy\n6 dog\n',
    option: '{\n' +
            '  gridSize: 16,\n' +
            '  weightFactor: 16,\n' +
            '  origin: [90, 0],\n' +
            '  fontFamily: \'Times, serif\',\n' +
            '  color: \'random-light\',\n' +
            '  backgroundColor: \'#000\',\n' +
            '  shuffle: false,\n' +
            '  rotateRatio: 0\n' +
            '}',
    width: 180,
    height: 480
  },
  'love' : {
    list: (function generateLoveList() {
      var list = ['12 Love'];
      var nums = [5, 4, 3, 2, 2];
      // This list of the word "Love" in language of the world was taken from
      // the Language links of entry "Love" in English Wikipedia, with duplicate
      // spelling removed.
/*
      var words = ('Liebe,ፍቅር,Lufu,حب,Aimor,Amor,Heyran,ভালোবাসা,Каханне,Любоў,Любов,བརྩེ་དུང་།,' +
        'Ljubav,Karantez,Юрату,Láska,Amore,Cariad,Kærlighed,Armastus,Αγάπη,Amo,Amol,Maitasun,' +
        'عشق,Pyar,Amour,Leafde,Gràdh,愛,爱,પ્રેમ,사랑,Սեր,Ihunanya,Cinta,ᑕᑯᑦᓱᒍᓱᑉᐳᖅ,Ást,אהבה,' +
        'ಪ್ರೀತಿ,სიყვარული,Махаббат,Pendo,Сүйүү,Mīlestība,Meilė,Leefde,Bolingo,Szerelem,' +
        'Љубов,സ്നേഹം,Imħabba,प्रेम,Ái,Хайр,အချစ်,Tlazohtiliztli,Liefde,माया,मतिना,' +
        'Kjærlighet,Kjærleik,ପ୍ରେମ,Sevgi,ਪਿਆਰ,پیار,Miłość,Leevde,Dragoste,' +
        'Khuyay,Любовь,Таптал,Dashuria,Amuri,ආදරය,Ljubezen,Jaceyl,خۆشەویستی,Љубав,Rakkaus,' +
        'Kärlek,Pag-ibig,காதல்,ప్రేమ,ความรัก,Ишқ,Aşk,محبت,Tình yêu,Higugma,ליבע').split(',');
*/

      var words = ('소 나 기 황순원 소년은 개울가에서 소녀를 보자 곧 윤 초시네 증손녀딸이라는 걸 알 수 있었다 소녀는 개울에다 손을 잠그고 물장난을 하고 있는 것이다 서울서는 이런 개울물을 보지 못하기나 한 듯이 벌써 며칠째 소녀는 학교에서 돌아오는 길에 물장난이었다 그런데 어제까지는 개울 기슭에서 하더니 오늘은 징검다리 한가운데 앉아서 하고 있다 소년은 개울둑에 앉아 버렸다 소녀가 비키기를 기다리자는 것이다 요행 지나가는 사람이 있어 소녀가 길을 비켜 주었다 다음 날은 좀 늦게 개울가로 나왔다 이 날은 소녀가 징검다리 한가운데 앉아 세수를 하고 있었다 분홍 스웨터 소매를 걷어올린 팔과 목덜미가 마냥 희었다 한참 세수를 하고 나더니 이번에는 물 속을 빤히 들여다 본다 얼굴이라도 비추어 보는 것이리라 갑자기 물을 움켜 낸다 고기 새끼라도 지나가는 듯 소녀는 소년이 개울둑에 앉아 있는 걸 아는지 모르는지 그냥 날쌔게 물만 움켜 낸다 그러나 번번이 허탕이다 그대로 재미 있는 양 자꾸 물만 움킨다 어제처럼 개울을 건너는 사람이 있어야 길을 비킬 모양이다 그러다가 소녀가 물 속에서 무엇을 하나 집어 낸다 하얀 조약돌이었다 그리고는 벌떡 일어나 팔짝팔짝 징검다리를 뛰어 건너간다 다 건너가더니만 홱 이리로 돌아서며 이 바보 조약돌이 날아왔다 소년은 저도 모르게 벌떡 일어섰다 단발머리를 나풀거리며 소녀가 막 달린다 갈밭 사잇길로 들어섰다 뒤에는 청량한 가을 햇살 아래 빛나는 갈꽃뿐 이제 저쯤 갈밭머리로 소녀가 나타나리라 꽤 오랜 시간이 지났다고 생각됐다 그런데도 소녀는 나타나지 않는다 발돋움을 했다 그러고도 상당한 시간이 지났다고 생각됐다 저 쪽 갈밭머리에 갈꽃이 한 옴큼 움직였다 소녀가 갈꽃을 안고 있었다 그리고 이제는 천천한 걸음이었다 유난히 맑은 가을 햇살이 갈꽃머리에서 반짝거렸다 소녀 아닌 갈꽃이 들길을 걸어 가는 것만 같았다 소년은 이 갈꽃이 아주 뵈지 않게 되기까지 그대로 서 있었다 문득 소녀가 던진 조약돌을 내려다 보았다 물기가 걷혀 있었다 소년은 조약돌을 집어 주머니에 넣었다 다음 날부터 좀더 늦게 개울가로 나왔다 소녀의 그림자가 뵈지 않았다 다행이었다 그러나 이상한 일이었다 소녀의 그림자가 뵈지 않는 날이 계속될수록 소년의 가슴 한 구석에는 어딘가 허전함이 자리 잡는 것이었다 주머니 속 조약돌을 주무르는 버릇이 생겼다  그러한 어떤 날 소년은 전에 소녀가 앉아 물장난을 하던 징검다리 한가운데에 앉아 보았다 물 속에 손을 잠갔다 세수를 하였다 물 속을 들여다 보았다 검게 탄 얼굴이 그대로 비치었다 싫었다 소년은 두 손으로 물 속의 얼굴을 움키었다 몇 번이고 움키었다 그러다가 깜짝 놀라 일어나고 말았다 소녀가 이리로 건너오고 있지 않느냐 숨어서 내가 하는 일을 엿보고 있었구나 소년은 달리기 시작했다 디딤돌을 헛디뎠다 한 발이 물 속에 빠졌다 더 달렸다 몸을 가릴 데가 있어 줬으면 좋겠다 이 쪽 길에는 갈밭도 없다 메밀밭이다 전에 없이 메밀꽃 내가 짜릿하게 코를 찌른다고 생각했다 미간이 아찔했다 찝찔한 액체가 입술에 흘러들었다 코피였다 소년은 한 손으로 코피를 훔쳐 내면서 그냥 달렸다 어디선가 바보 바보하는 소리가 자꾸만 뒤따라오는 것 같았다 토요일이었다 개울가에 이르니 며칠째 보이지 않던 소녀가 건너편 가에 앉아 물장난을 하고 있었다 모르는 체 징검다리를 건너기 시작했다 얼마 전에 소녀 앞에서 한 번 실수를 했을 뿐 여태 큰길 가듯이 건너던 징검다리를 오늘은 조심스럽게 건넌다 얘 못 들은 체했다 둑 위로 올라섰다 얘 이게 무슨 조개지? 자기도 모르게 돌아섰다 소녀의 맑고 검은 눈과 마주쳤다 얼른 소녀의 손바닥으로 눈을 떨구었다 비단조개 이름도 참 곱다 갈림길에 왔다 여기서 소녀는 아래편으로 한 삼 마장쯤 소년은 우대로 한 십 리 가까운 길을 가야 한다 소녀가 걸음을 멈추며 너 저 산 너머에 가 본 일 있니? 벌 끝을 가리켰다 없다 우리 가 보지 않으련? 시골 오니까 혼자서 심심해 못 견디겠다 저래봬도 멀다 멀면 얼마나 멀기에? 서울 있을 땐 사뭇 먼 데까지도 소풍 갔었다 소녀의 눈이 금새 바보 바보 할 것만 같았다 논 사잇길로 돌아섰다 벼 가을걷이하는 곁을 지났다 허수아비가 서 있었다 소년이 새끼줄을 흔들었다 참새가 몇 마리 날아간다 참 오늘은 일찍 집으로 돌아가 텃논의 참새를 봐야 할 걸 하는 생각이 든다 아 재밌다! 소녀가 허수아비 줄을 잡더니 흔들어 댄다 허수아비가 자꾸 우쭐거리며 춤을 춘다 소녀의 왼쪽 볼에 살포시 보조개가 패었다 저만큼 허수아비가 또 서 있다 소녀가 그리로 달려간다 그 뒤를 소년도 달렸다 오늘 같은 날은 일찍 집으로 돌아가 집안일을 도와야 한다는 생각을 잊어버리기라도 하려는 듯이 소녀의 곁을 스쳐 그냥 달린다 메뚜기가 따끔따끔 얼굴에 와 부딪친다 쪽빛으로 한껏 갠 가을 하늘이 소년의 눈앞에서 맴을 돈다 어지럽다 저놈의 독수리 저놈의 독수리 저놈의 독수리가 맴을 돌고 있기 때문이다 돌아다보니 소녀는 지금 자기가 지나쳐 온 허수아비를 흔들고 있다 좀 전 허수아비보다 더 우쭐거린다 논이 끝난 곳에 도랑이 하나 있었다 소녀가 먼저 뛰어 건넜다 거기서부터 산 밑까지는 밭이었다 수숫단을 세워 놓은 밭머리를 지났다  저게 뭐니? 원두막 여기 참외 맛있니? 그럼 참외 맛도 좋지만 수박 맛은 더 좋다 하나 먹어 봤으면 소년이 참외 그루에 심은 무우밭으로 들어가 무우 두 밑을 뽑아 왔다 아직 밑이 덜 들어 있었다 잎을 비틀어 팽개친 후 소녀에게 한 개 건넨다 그리고는 이렇게 먹어야 한다는 듯이 먼저 대강이를 한 입 베 물어 낸 다음 손톱으로 한 돌이 껍질을 벗겨 우쩍 깨문다 소녀도 따라 했다 그러나 세 입도 못 먹고 아 맵고 지려 하며 집어던지고 만다 참 맛 없어 못 먹겠다 소년이 더 멀리 팽개쳐 버렸다 산이 가까워졌다 단풍잎이 눈에 따가왔다 야아! 소녀가 산을 향해 달려갔다 이번은 소년이 뒤따라 달리지 않았다 그러고도 곧 소녀보다 더 많은 꽃을 꺾었다 이게 들국화 이게 싸리꽃 이게 도라지꽃 도라지꽃이 이렇게 예쁜 줄은 몰랐네 난 보랏빛이 좋아 그런데 이 양산같이 생긴 노란 꽃이 뭐지? 마타리꽃 소녀는 마타리꽃을 양산 받듯이 해 보인다 약간 상기된 얼굴에 살포시 보조개를 떠올리며 다시 소년은 꽃 한 움큼을 꺾어 왔다 싱싱한 꽃가지만 골라 소녀에게 건넨다 그러나 소녀는 하나도 버리지 마라 산마루께로 올라갔다 맞은편 골짜기에 오순도순 초가집이 몇 모여 있었다 누가 말한 것도 아닌데 바위에 나란히 걸터앉았다 유달리 주위가 조용해 진 것 같았다 따가운 가을 햇살만이 말라 가는 풀 냄새를 퍼뜨리고 있었다 저건 또 무슨 꽃이지? 적잖이 비탈진 곳에 칡덩굴이 엉키어 꽃을 달고 있었다 꼭 등꽃 같네 서울 우리 학교에 큰 등나무가 있었단다 저 꽃을 보니까 등나무 밑에서 놀던 동무들 생각이 난다 소녀가 조용히 일어나 비탈진 곳으로 간다 꽃송이가 많이 달린 줄기를 잡고 끊기 시작한다 좀처럼 끊어지지 않는다 안간힘을 쓰다가 그만 미끄러지고 만다 칡덩굴을 그러쥐었다 소년이 놀라 달려갔다 소녀가 손을 내밀었다 손을 잡아 이끌어 올리며 소년은 제가 꺾어다 줄 것을 잘못했다고 뉘우친다 소녀의 오른쪽 무릎에 핏방울이 내맺혔다 소년은 저도 모르게 생채기에 입술을 가져다 대고 빨기 시작했다 그러다가 무슨 생각을 했는지 홱 일어나 저 쪽으로 달려간다 좀 만에 숨이 차 돌아온 소년은 이걸 바르면 낫는다 송진을 생채기에다 문질러 바르고는 그 달음으로 칡덩굴 있는 데로 내려가 꽃 많이 달린 몇 줄기를 이빨로 끊어 가지고 올라온다 그리고는 저기 송아지가 있다 그리 가 보자 누렁송아지였다 아직 코뚜레도 꿰지 않았다 소년이 고삐를 바투 잡아 쥐고 등을 긁어 주는 체 훌쩍 올라탔다 송아지가 껑충거리며 돌아간다 소녀의 흰 얼굴이 분홍 스웨터가 남색 스커트가 안고 있는 꽃과 함께 범벅이 된다 모두가 하나의 큰 꽃묶음 같다 어지럽다 그러나 내리지 않으리라 자랑스러웠다 이것만은 소녀가 흉내 내지 못할 자기 혼자만이 할 수 있는 일인 것이다 너희 예서 뭣들 하느냐? 농부 하나가 억새풀 사이로 올라왔다 송아지 등에서 뛰어내렸다 어린 송아지를 타서 허리가 상하면 어쩌느냐고 꾸지람을 들을 것만 같다 그런데 나룻이 긴 농부는 소녀 편을 한 번 훑어보고는 그저 송아지 고삐를 풀어 내면서 어서들 집으로 가거라 소나기가 올라 참 먹장구름 한 장이 머리 위에 와 있다 갑자기 사면이 소란스러워진 것 같다 바람이 우수수 소리를 내며 지나간다 굵은 빗방울이었다 목덜미가 선뜩선뜩 했다 그러자 대번에 눈앞을 가로막는 빗줄기 비안개 속에 원두막이 보였다 그리로 가 비를 그을 수밖에 그러나 원두막은 기둥이 기울고 갈래갈래 찢어져 있었다 그런대로 비가 덜 새는 곳을 가려 소녀를 들어서게 했다 소녀의 입술이 파아랗게 질렸다 어깨를 자꾸 떨었다 무명 겹저고리를 벗어 소녀의 어깨를 싸 주었다 소녀는 비에 젖은 눈을 들어 한 번 쳐다보았을 뿐 소년이 하는 대로 잠자코 있었다 그리고는 안고 온 꽃묶음 속에서 가지가 꺾이고 꽃이 일그러진 송이를 골라 발 밑에 버린다 소녀가 들어선 곳도 비가 새기 시작했다 더 거기서 비를 그을 수 없었다 밖을 내다보던 소년이 무엇을 생각했는지 수수밭 쪽으로 달려간다 세워 놓은 수숫단 속을 비집어 보더니 옆의 수숫단을 날라다 덧세운다 다시 속을 비집어 본다 그리고는 이쪽을 향해 손짓을 한다  수숫단 속은 비는 안 새었다 그저 어둡고 좁은 게 안 됐다 앞에 나앉은 소년은 그냥 비를 맞아야만 했다 그런 소년의 어깨에서 김이 올랐다 소녀가 속삭이듯이 이리 들어와 앉으라고 했다 괜찮다고 했다 소녀가 다시 들어와 앉으라고 했다 할 수 없이 뒷걸음질을 쳤다 그 바람에 소녀가 안고 있는 꽃묶음이 망그러졌다 그러나 소녀는 상관없다고 생각했다 비에 젖은 소년의 몸 내음새가 확 코에 끼얹혀졌다 그러나 고개를 돌리지 않았다 도리어 소년의 몸 기운으로 해서 떨리던 몸이 적이 누그러지는 느낌이었다 소란하던 수숫잎 소리가 뚝 그쳤다 밖이 멀개졌다 수숫단 속을 벗어 나왔다 멀지 않은 앞쪽에 햇빛이 눈부시게 내리붓고 있었다 도랑 있는 곳까지 와 보니 엄청나게 물이 불어 있었다 빛마저 제법 붉은 흙탕물이었다 뛰어 건널 수가 없었다 소년이 등을 돌려 댔다 소녀가 순순히 업히었다 걷어올린 소년의 잠방이까지 물이 올라왔다 소녀는 어머나 소리를 지르며 소년의 목을 끌어안았다 개울가에 다다르기 전에 가을 하늘은 언제 그랬는가 싶게 구름 한 점 없이 쪽빛으로 개어 있었다 그 뒤로는 소녀의 모습은 뵈지 않았다 매일같이 개울가로 달려와 봐도 뵈지 않았다 학교에서 쉬는 시간에 운동장을 살피기도 했다 남 몰래 5학년 여자 반을 엿보기도 했다 그러나 뵈지 않았다 그 날도 소년은 주머니 속 흰 조약돌만 만지작거리며 개울가로 나왔다 그랬더니 이 쪽 개울둑에 소녀가 앉아 있는 게 아닌가 소년은 가슴부터 두근거렸다 그 동안 앓았다 어쩐지 소녀의 얼굴이 해쓱해져 있었다 그 날 소나기 맞은 탓 아냐? 소녀가 가만히 고개를 끄덕이었다 인제 다 났냐? 아직도 그럼 누워 있어야지 하도 갑갑해서 나왔다 참 그 날 재밌었어 그런데 그날 어디서 이런 물이 들었는지 잘 지지 않는다 소녀가 분홍 스웨터 앞자락을 내려다본다 거기에 검붉은 진흙물 같은 게 들어 있었다 소녀가 가만히 보조개를 떠올리며 그래 이게 무슨 물 같니? 소년은 스웨터 앞자락만 바라다보고 있었다 내 생각해 냈다 그날 도랑을 건너면서 내가 업힌 일이 있지? 그 때 네 등에서 옮은 물이다 소년은 얼굴이 확 달아오름을 느꼈다 갈림길에서 소녀는 저 오늘 아침에 우리 집에서 대추를 땄다 낼 제사 지내려고 대추 한 줌을 내 준다 소년은 주춤한다 맛봐라 우리 증조 할아버지가 심었다는데 아주 달다 소년은 두 손을 오그려 내밀며 참 알도 굵다! 그리고 저 우리 이번에 제사 지내고 나서 좀 있다 집을 내주게 됐다 소년은 소녀 네가 이사해 오기 전에 벌써 어른들의 이야기를 들어서 윤 초시 손자가 서울서 사업에 실패해 가지고 고향에 돌아오지 않을 수 없게 되었다는 걸 알고 있었다 그것이 이번에는 고향 집마저 남의 손에 넘기게 된 모양이었다 왜 그런지 난 이사 가는 게 싫어졌다 어른들이 하는 일이니 어쩔 수 없지만 전에 없이 소녀의 까만 눈에 쓸쓸한 빛이 떠돌았다 소녀와 헤어져 돌아오는 길에 소년은 혼잣속으로 소녀가 이사를 간다는 말을 수없이 되뇌어 보았다 무어 그리 안타까울 것도 서러울 것도 없었다 그렇건만 소년은 지금 자기가 씹고 있는 대추알의 단맛을 모르고 있었다 이 날 밤 소년은 몰래 덕쇠 할아버지네 호두밭으로 갔다 낮에 봐 두었던 나무로 올라갔다 그리고 봐 두었던 가지를 향해 작대기를 내리쳤다 호두송이 떨어지는 소리가 별나게 크게 들렸다 가슴이 선뜩했다 그러나 다음 순간 굵은 호두야 많이 떨어져라 많이 떨어져라 저도 모를 힘에 이끌려 마구 작대기를 내리치는 것이었다 돌아오는 길에는 열 이틀 달이 지우는 그늘만 골라 디뎠다 그늘의 고마움을 처음 느꼈다 불룩한 주머니를 어루만졌다 호두송이를 맨손으로 깠다가는 옴이 오르기 쉽다는 말 같은 건 아무렇지도 않았다 그저 근동에서 제일 가는 이 덕쇠 할아버지네 호두를 어서 소녀에게 맛 보여야 한다는 생각만이 앞섰다 그러다 아차 하는 생각이 들었다 소녀더러 병이 좀 낫거들랑 이사 가기 전에 한 번 개울가로 나와 달라는 말을 못 해 둔 것이었다 바보 같은 것 바보 같은 것 이튿날 소년이 학교에서 돌아오니 아버지가 나들이옷으로 갈아 입고 닭 한 마리를 안고 있었다 어디 가시느냐고 물었다 그 말에는 대꾸도 없이 아버지는 안고 있는 닭의 무게를 겨냥해 보면서 이만하면 될까? 어머니가 망태기를 내주며 벌써 며칠째 걀걀 하고 알 날 자리를 보던데요 크진 않아도 살은 쪘을 거여요 소년이 이번에는 어머니한테 아버지가 어디 가시느냐고 물어 보았다 저 서당골 윤 초시 댁에 가신다 제삿상에라도 놓으시라고 그럼 큰 놈으로 하나 가져가지 저 얼룩수탉으로 이 말에 아버지는 허허 웃고 나서 임마 그래도 이게 실속이 있다 소년은 공연히 열적어 책보를 집어던지고는 외양간으로 가 쇠잔등을 한 번 철썩 갈겼다 쇠파리라도 잡는 체 개울물은 날로 여물어 갔다 소년은 갈림길에서 아래쪽으로 가 보았다 갈밭머리에서 바라보는 서당골 마을은 쪽빛 하늘 아래 한결 가까와 보였다 어른들의 말이 내일 소녀 네가 양평읍으로 이사 간다는 것이었다 거기 가서는 조그마한 가겟방을 보게 되리라는 것이었다 소년은 저도 모르게 주머니 속 호두알을 만지작거리며 한 손으로는 수없이 갈꽃을 휘어 꺾고 있었다 그 날 밤 소년은 자리에 누워서도 같은 생각뿐이었다 내일 소녀 네가 이사하는 걸 가 보나 어쩌나 가면 소녀를 보게 될까 어떨까 그러다가 까무룩 잠이 들었는가 하는데 허 참 세상일도 마을 갔던 아버지가 언제 돌아왔는지 윤 초시 댁도 말이 아니야 그 많던 전답을 다 팔아 버리고 대대로 살아 오던 집마저 남의 손에 넘기더니 또 악상까지 당하는 걸 보면 남폿불 밑에서 바느질감을 안고 있던 어머니가 증손이라곤 계집애 그 애 하나뿐이었지요? 그렇지 사내 애 둘 있던 건 어려서 잃어버리고 어쩌면 그렇게 자식복이 없을까 글쎄 말이지 이번 앤 꽤 여러 날 앓는 걸 약도 변변히 못 써 봤다더군 지금 같아선 윤 초시네도 대가 끊긴 셈이지 그런데 참 이번 계집앤 어린 것이 여간 잔망스럽지가 않아 글쎄 죽기 전에 이런 말을 했다지 않아? 자기가 죽거든 자기 입던 옷을 꼭 그대로 입혀서 묻어 달라고 ').replace(/[^\'a-zA-Zㄱ-ㅎ가-힣]/g, ' ')
          .split(' ')
          .filter(function(p){return p != ''})
          .map(function(word){
            return word.toLowerCase()
          })/*
          .filter(function(word){
            return commonWords.indexOf(word) == -1
          })*/;

      nums.forEach(function(n) {
        words.forEach(function(w) {
          list.push(n + ' ' + w);
        });
      });

      return list.join('\n');
    })(),
    option: '{\n' +
      '  gridSize: Math.round(16 * $(\'#canvas\').width() / 1024),\n' +
      '  weightFactor: function (size) {\n' +
      '    return Math.pow(size, 2.3) * $(\'#canvas\').width() / 1024;\n' +
      '  },\n' +
      '  fontFamily: \'Times, serif\',\n' +
      '  color: function (word, weight) {\n' +
      '    return (weight === 12) ? \'#f02222\' : \'#c09292\';\n' +
      '  },\n' +
      '  rotateRatio: 0.5,\n' +
      '  backgroundColor: \'#ffe0e0\'\n' +
      '}'
  }
};

var maskCanvas;

jQuery(function($) {
  var $form = $('#form');
  var $canvas = $('#canvas');
  var $htmlCanvas = $('#html-canvas');
  var $canvasContainer = $('#canvas-container');
  var $loading = $('#loading');

  var $list = $('#input-list');
  var $options = $('#config-option');
  var $width = $('#config-width');
  var $height = $('#config-height');
  var $mask = $('#config-mask');
  var $dppx = $('#config-dppx');
  var $css = $('#config-css');
  var $webfontLink = $('#link-webfont');

  if (!WordCloud.isSupported) {
    $('#not-supported').prop('hidden', false);
    $form.find('textarea, input, select, button').prop('disabled', true);
    return;
  }

  var $box = $('<div id="box" hidden />');
  $canvasContainer.append($box);
  window.drawBox = function drawBox(item, dimension) {
    if (!dimension) {
      $box.prop('hidden', true);

      return;
    }

    var dppx = $dppx.val();

    $box.prop('hidden', false);
    $box.css({
      left: dimension.x / dppx + 'px',
      top: dimension.y / dppx + 'px',
      width: dimension.w / dppx + 'px',
      height: dimension.h / dppx + 'px'
    });
  };

  // Update the default value if we are running in a hdppx device
  if (('devicePixelRatio' in window) &&
      window.devicePixelRatio !== 1) {
    $dppx.val(window.devicePixelRatio);
  }

  $canvas.on('wordcloudstop', function wordcloudstopped(evt) {
    $loading.prop('hidden', true);
  });

  $form.on('submit', function formSubmit(evt) {
    evt.preventDefault();

    changeHash('');
  });

  $('#config-mask-clear').on('click', function() {
    maskCanvas = null;
    // Hack!
    $mask.wrap('<form>').closest('form').get(0).reset();
    $mask.unwrap();
  });

  // Load the local image file, read it's pixels and transform it into a
  // black-and-white mask image on the canvas.
  $mask.on('change', function() {
    maskCanvas = null;

    var file = $mask[0].files[0];

    if (!file) {
      return;
    }

    var url = window.URL.createObjectURL(file);
    var img = new Image();
    img.src = url;

    img.onload = function readPixels() {
      window.URL.revokeObjectURL(url);

      maskCanvas = document.createElement('canvas');
      maskCanvas.width = img.width;
      maskCanvas.height = img.height;

      var ctx = maskCanvas.getContext('2d');
      ctx.drawImage(img, 0, 0, img.width, img.height);

      var imageData = ctx.getImageData(
        0, 0, maskCanvas.width, maskCanvas.height);
      var newImageData = ctx.createImageData(imageData);

      for (var i = 0; i < imageData.data.length; i += 4) {
        var tone = imageData.data[i] +
          imageData.data[i + 1] +
          imageData.data[i + 2];
        var alpha = imageData.data[i + 3];

        if (alpha < 128 || tone > 128 * 3) {
          // Area not to draw
          newImageData.data[i] =
            newImageData.data[i + 1] =
            newImageData.data[i + 2] = 255;
          newImageData.data[i + 3] = 0;
        } else {
          // Area to draw
          newImageData.data[i] =
            newImageData.data[i + 1] =
            newImageData.data[i + 2] = 0;
          newImageData.data[i + 3] = 255;
        }
      }

      ctx.putImageData(newImageData, 0, 0);
    };
  });

  if($mask[0]){
  if ($mask[0].files.length) {
    $mask.trigger('change');
  }
  }

  $('#btn-save').on('click', function save(evt) {
    var url = $canvas[0].toDataURL();
    if ('download' in document.createElement('a')) {
      this.href = url;
    } else {
      evt.preventDefault();
      alert('Please right click and choose "Save As..." to save the generated image.');
      window.open(url, '_blank', 'width=500,height=300,menubar=yes');
    }
  });

  $('#btn-canvas').on('click', function showCanvas(evt) {
    $canvas.removeClass('hide');
    $htmlCanvas.addClass('hide');
    $('#btn-canvas').prop('disabled', true);
    $('#btn-html-canvas').prop('disabled', false);
  });

  $('#btn-html-canvas').on('click', function showCanvas(evt) {
    $canvas.addClass('hide');
    $htmlCanvas.removeClass('hide');
    $('#btn-canvas').prop('disabled', false);
    $('#btn-html-canvas').prop('disabled', true);
  });

  $('#btn-canvas').prop('disabled', true);
  $('#btn-html-canvas').prop('disabled', false);

  var $examples = $('#examples');
  $examples.on('change', function loadExample(evt) {
    changeHash(this.value);

    this.selectedIndex = 0;
    $examples.blur();
  });

  var run = function run() {
    $loading.prop('hidden', false);

    // Load web font
    $webfontLink.prop('href', $css.val());

    // devicePixelRatio
    var devicePixelRatio = parseFloat($dppx.val());

    // Set the width and height
    var width = $width.val() ? $width.val() : $('#canvas-container').width();
    var height = $height.val() ? $height.val() : Math.floor(width * 0.65);
    var pixelWidth = width;
    var pixelHeight = height;

    if (devicePixelRatio !== 1) {
      $canvas.css({'width': width + 'px', 'height': height + 'px'});

      pixelWidth *= devicePixelRatio;
      pixelHeight *= devicePixelRatio;
    } else {
      $canvas.css({'width': '', 'height': '' });
    }

    $canvas.attr('width', pixelWidth);
    $canvas.attr('height', pixelHeight);

    $htmlCanvas.css({'width': pixelWidth + 'px', 'height': pixelHeight + 'px'});

    // Set the options object
    var options = {};
    if ($options.val()) {
      options = (function evalOptions() {
        try {
          return eval('(' + $options.val() + ')');
        } catch (error) {
          alert('The following Javascript error occurred in the option definition; all option will be ignored: \n\n' +
            error.toString());
          return {};
        }
      })();
    }

    // Set devicePixelRatio options
    if (devicePixelRatio !== 1) {
      if (!('gridSize' in options)) {
        options.gridSize = 8;
      }
      options.gridSize *= devicePixelRatio;

      if (options.origin) {
        if (typeof options.origin[0] == 'number')
          options.origin[0] *= devicePixelRatio;
        if (typeof options.origin[1] == 'number')
          options.origin[1] *= devicePixelRatio;
      }

      if (!('weightFactor' in options)) {
        options.weightFactor = 1;
      }
      if (typeof options.weightFactor == 'function') {
        var origWeightFactor = options.weightFactor;
        options.weightFactor =
          function weightFactorDevicePixelRatioWrap() {
            return origWeightFactor.apply(this, arguments) * devicePixelRatio;
          };
      } else {
        options.weightFactor *= devicePixelRatio;
      }
    }

    // Put the word list into options
    if ($list.val()) {
      var list = [];
      $.each($list.val().split('\n'), function each(i, line) {
        if (!$.trim(line))
          return;

        var lineArr = line.split(' ');
        var count = parseFloat(lineArr.shift()) || 0;
        list.push([lineArr.join(' '), count]);
      });
      options.list = list;
    }

    if (maskCanvas) {
      options.clearCanvas = false;

      /* Determine bgPixel by creating
         another canvas and fill the specified background color. */
      var bctx = document.createElement('canvas').getContext('2d');

      bctx.fillStyle = options.backgroundColor || '#fff';
      bctx.fillRect(0, 0, 1, 1);
      var bgPixel = bctx.getImageData(0, 0, 1, 1).data;

      var maskCanvasScaled =
        document.createElement('canvas');
      maskCanvasScaled.width = $canvas[0].width;
      maskCanvasScaled.height = $canvas[0].height;
      var ctx = maskCanvasScaled.getContext('2d');

      ctx.drawImage(maskCanvas,
        0, 0, maskCanvas.width, maskCanvas.height,
        0, 0, maskCanvasScaled.width, maskCanvasScaled.height);

      var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      var newImageData = ctx.createImageData(imageData);
      for (var i = 0; i < imageData.data.length; i += 4) {
        if (imageData.data[i + 3] > 128) {
          newImageData.data[i] = bgPixel[0];
          newImageData.data[i + 1] = bgPixel[1];
          newImageData.data[i + 2] = bgPixel[2];
          newImageData.data[i + 3] = bgPixel[3];
        } else {
          // This color must not be the same w/ the bgPixel.
          newImageData.data[i] = bgPixel[0];
          newImageData.data[i + 1] = bgPixel[1];
          newImageData.data[i + 2] = bgPixel[2];
          newImageData.data[i + 3] = bgPixel[3] ? (bgPixel[3] - 1) : 0;
        }
      }

      ctx.putImageData(newImageData, 0, 0);

      ctx = $canvas[0].getContext('2d');
      ctx.drawImage(maskCanvasScaled, 0, 0);

      maskCanvasScaled = ctx = imageData = newImageData = bctx = bgPixel = undefined;
    }

    // Always manually clean up the html output
    if (!options.clearCanvas) {
      $htmlCanvas.empty();
      $htmlCanvas.css('background-color', options.backgroundColor || '#fff');
    }

    // All set, call the WordCloud()
    // Order matters here because the HTML canvas might by
    // set to display: none.
    WordCloud([$canvas[0], $htmlCanvas[0]], options);
  };

  var loadExampleData = function loadExampleData(name) {
    var example = examples[name];

    $options.val(example.option || '');
    $list.val(example.list || '');
    $css.val(example.fontCSS || '');
    $width.val(example.width || '');
    $height.val(example.height || '');
  };

  var changeHash = function changeHash(name) {
    if (window.location.hash === '#' + name ||
        (!window.location.hash && !name)) {
      // We got a same hash, call hashChanged() directly
      hashChanged();
    } else {
      // Actually change the hash to invoke hashChanged()
      window.location.hash = '#' + name;
    }
  };

  var hashChanged = function hashChanged() {
    var name = window.location.hash.substr(1);
    if (!name) {
      // If there is no name, run as-is.
      run();
    } else if (name in examples) {
      // If the name matches one of the example, load it and run it
      loadExampleData(name);
      run();
    } else {
      // If the name doesn't match, reset it.
      window.location.replace('#');
    }
  }

  $(window).on('hashchange', hashChanged);

  if (!window.location.hash ||
    !(window.location.hash.substr(1) in examples)) {
    // If the initial hash doesn't match to any of the examples,
    // or it doesn't exist, reset it to #love
    window.location.replace('#love');
  } else {
    hashChanged();
  }
});
