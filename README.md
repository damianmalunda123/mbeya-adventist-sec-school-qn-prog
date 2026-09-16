# MASS Question Program

## Mfumo Huu Ni Nini?

MASS Question Program ni programu ya browser inayosaidia mwanafunzi kufanya mazoezi ya maswali ya shule. Mwanafunzi anachagua somo, anachagua kiwango cha ugumu, anajibu maswali, anaona kama jibu ni sahihi au si sahihi, na mwisho anaona matokeo yake.

Programu ni ya static website. Hii maana yake ni kwamba haina database au server ya lazima ili ifanye kazi. Inatumia HTML, CSS na JavaScript ndani ya folder hili.

## Mafaili Ya Programu

- `index.html`: Muundo wa screen zote na buttons za programu.
- `styles.css`: Rangi, picha za background, cards, buttons na mpangilio wa ukurasa.
- `script.js`: Logic yote ya quiz, subject banks, levels, scoring, progress na navigation.
- `image/`: Logo na picha za background.
- `maswali/`: Question banks za ziada zinazoweza kupakiwa. Kwa sasa kuna Physics Markdown bank.

## Jinsi Ya Kuanza Programu

1. Fungua folder la project.
2. Fungua `index.html` kwenye browser.
3. Njia inayopendekezwa ni kuanzisha local server:

```bash
python3 -m http.server 8000
```

4. Fungua `http://localhost:8000/` kwenye browser.

Local server inahitajika ili browser iruhusu programu kusoma file la maswali lililo ndani ya folder `maswali/`.

## Hatua Ya Kwanza: Home

Programu ikianza inaonyesha Home screen yenye:

- Logo ya MASS.
- Jina la shule.
- Maelezo mafupi ya programu.
- Orodha ya masomo yote.
- Idadi ya maswali yanayopatikana kwenye kila somo.

Background ya programu inatumia picha iliyopo `image/34.jpg`. Sehemu ya Home haina rangi nyeupe ya kufunika picha ya nyuma.

## Hatua Ya Pili: Kuchagua Somo

Mwanafunzi anabofya card ya somo analotaka, kwa mfano Physics au Bible Knowledge.

Programu hufanya mambo haya:

1. Inahifadhi jina la somo kwenye `currentSubject`.
2. Inamtoa mwanafunzi Home.
3. Inampeleka kwenye screen ya kuchagua level.

Kama mwanafunzi anabonyeza **Back to Subjects**, programu inarudi kwenye orodha ya masomo.

## Hatua Ya Tatu: Kuchagua Level

Kuna levels tatu:

- **Easy**: maswali ya msingi zaidi.
- **Normal**: maswali ya kiwango cha kati.
- **Hard**: maswali magumu na ya kufikiri zaidi.

Mwanafunzi akichagua level, programu:

1. Inahifadhi level kwenye `currentLevel`.
2. Inachukua maswali ya somo lililochaguliwa.
3. Inachagua maswali yanayohusiana na level hiyo.
4. Inayachanganya kwa mpangilio wa random.
5. Inahifadhi muda wa kuanza quiz.
6. Inafungua quiz screen.

## Maswali Yanapatikana Wapi?

### 1. Maswali Ya Ndani Ya `script.js`

Kila somo lina bank yake ndani ya `questionBanks` kwenye `script.js`. Kila swali lina vitu hivi:

- `q`: swali lenyewe.
- `a`, `b`, `c`, `d`: options nne.
- `correct`: herufi ya jibu sahihi.
- `exp`: maelezo ya jibu.

### 2. Maswali Ya Folder `maswali/`

Programu inasoma Physics bank iliyopo:

`maswali/Physics_300_Questions_Form1_4.md`

Loader inasoma sections hizi:

- Section A: Simple questions.
- Section B: Normal questions.
- Section C: Hard questions.

Kila swali linalosomwa linawekwa kwenye Physics bank pamoja na level yake.

### 3. Maswali Ya Mtandaoni

Programu hujaribu kupata maswali kutoka Open Trivia Database kupitia internet. Categories hutumika kwa baadhi ya masomo kama Physics, Mathematics, Computer, Geography, History, Civics, Biology, Chemistry na English.

Maswali ya online:

1. Yanapakuliwa wakati programu inaanza.
2. HTML characters hubadilishwa kuwa maandishi ya kawaida.
3. Options huchanganywa.
4. Jibu sahihi linafuatiliwa hata baada ya options kuchanganywa.
5. Maswali yanaongezwa kwenye bank ya somo husika.

Kama internet haipo, API imefikia rate limit, au request imekataa, programu haitasimama. Itatumia maswali ya ndani na generated practice questions.

## Automatic Question Generation

Programu inalenga kuwa na hadi maswali 500 kwa kila somo. Kama bank ina maswali machache, mfumo hutengeneza **Generated practice** questions kwa kutumia maswali yaliyopo kama msingi.

Generation hufanya hivi:

1. Inachagua swali la msingi kutoka bank.
2. Inatengeneza practice variation yenye text tofauti.
3. Inachanganya options.
4. Inahamisha answer key pamoja na option sahihi.
5. Inahifadhi difficulty ya swali la msingi.
6. Inahakikisha generated question key haijawahi kutumika.

Prefix ya `Generated practice` haionyeshwi kwa mwanafunzi kwenye swali, lakini uniqueness ya ndani bado inalindwa na mfumo.

Generated question ni variation ya mazoezi inayotokana na content iliyopo. Si sawa na mwalimu au AI kuunda syllabus mpya yenye facts mpya, kwa hiyo question banks halisi bado ni muhimu kwa ubora wa maswali.

## Kuzuia Maswali Kujirudia

Programu hutumia question key inayotengenezwa kutoka kwenye text ya swali.

Wakati wa session:

1. Inahifadhi keys za maswali yaliyotumika kwa somo na level.
2. Inachuja maswali yaliyowahi kutumika.
3. Inachagua maswali mapya pekee.
4. Haitumii tena maswali ya mwanzo kujaza batch ya mwisho.
5. Kama hakuna swali jipya lililobaki, programu inaonyesha taarifa badala ya kurudia swali.

Hii inazuia swali lilelile kurudiwa ndani ya session moja.

## Quiz Screen

Quiz screen inaonyesha:

- Namba ya swali la sasa.
- Jumla ya maswali kwenye batch.
- Idadi ya maswali kwenye subject bank.
- Progress bar.
- Swali na options A, B, C na D.
- Explanation baada ya jibu.
- Buttons za Back, Next na Quit Quiz.

Kila batch ina maswali 10. Level pool inaweza kuwa kubwa zaidi, kwa hiyo quiz inaweza kuendelea kwa batches nyingi.

## Kujibu Swali

### Jibu Sahihi

Mwanafunzi akichagua jibu sahihi:

1. Option inabadilika kuwa correct.
2. Explanation inaonekana.
3. Jibu linahifadhiwa kwenye `userAnswers`.
4. Mwanafunzi anabonyeza `Next` kwenda mbele.

### Jibu Lisilo Sahihi

Mwanafunzi akichagua jibu lisilo sahihi:

1. Option aliyochagua inaonekana incorrect.
2. Option sahihi inaonekana correct.
3. Explanation inaonyesha jibu sahihi.
4. Jibu baya linahifadhiwa kama kosa.
5. Hakuna Retry Question.
6. Mwanafunzi anabonyeza `Next` na kwenda swali linalofuata.

Kosa hilo linaingia kwenye final results.

### Back

Button ya `Back` inamruhusu mwanafunzi kurudi kwenye swali lililopita ndani ya batch. Haiwezi kurudi kabla ya swali la kwanza la batch.

## Kumaliza Batch Ya Maswali 10

Baada ya swali la mwisho la batch:

1. Mfumo huhesabu correct answers za batch.
2. Huongeza idadi kwenye session score.
3. Huongeza idadi ya questions answered.
4. Kama kuna maswali zaidi, huonyesha batch completion screen.

Kwenye batch completion screen kuna:

- **Continue**: inaendelea na batch inayofuata ya somo na level hiyo.
- **See Results**: inaonyesha matokeo ya mpaka hapo.
- **Quit Quiz**: inarudi Home baada ya confirmation.

## Final Results

Final Results huonyesha:

- Correct Answers.
- Incorrect Answers.
- Accuracy percentage.
- Time Taken.
- Score ya correct answers dhidi ya total answered.
- Ujumbe wa performance kulingana na accuracy.

### Buttons Za Final Results

- **Start New Quiz**: inaanza quiz mpya kwenye somo na level ile ile.
- **Change Level**: inabaki kwenye somo hilo, lakini inarudisha level selection ili kuchagua Easy, Normal au Hard nyingine.
- **New Subject**: inafuta session na inarudisha Home kuchagua somo lingine.

## Quit Quiz

`Quit Quiz` ipo kwenye quiz screen, batch completion screen na bank completion screen.

Ikibonyezwa:

1. Programu inaomba confirmation.
2. Ikikubaliwa, current quiz progress inafutwa.
3. Subject na level ya session vinaondolewa.
4. Programu inarudi Home.

Ikikataliwa, mwanafunzi anaendelea na quiz bila kupoteza progress.

## Jinsi Score Inavyohesabiwa

Score huhesabiwa kwa kulinganisha jibu la mwanafunzi na `correct` ya swali.

- Jibu likilingana: `Correct Answers` inaongezeka.
- Jibu lisipolingana: `Incorrect Answers` inaongezeka.
- `Accuracy = Correct Answers / Total Answered × 100`.
- Time Taken huhesabiwa kutoka muda wa kuanza level mpaka muda wa kuonyesha results.

## Kuongeza Question Bank Mpya

Ili kuongeza bank mpya:

1. Tengeneza file ndani ya `maswali/`.
2. Tumia format yenye swali, options A-D, answer na explanation.
3. Ongeza parser au loader yake ndani ya `script.js`.
4. Hakikisha kila swali lina answer sahihi.
5. Hakikisha maswali mapya hayajirudii.
6. Fungua browser na ujaribu subject, levels, answer flow na final results.

Kwa bank ya somo jipya, ni lazima pia:

- Uongeze subject kwenye `subjectsList`.
- Uongeze bank kwenye `questionBanks`.
- Uongeze difficulty hints kama inahitajika.
- Uongeze loader kama bank iko file tofauti.

## Kuendesha Na Kukagua Programu

Kukagua JavaScript syntax:

```bash
node --check script.js
```

Kuanza local server:

```bash
python3 -m http.server 8000
```

Kisha fungua:

```text
http://localhost:8000/
```

## Muhtasari Wa Mzunguko Mzima

```text
Fungua app
	-> Load local Physics bank
	-> Jaribu load online questions
	-> Ondoa duplicates
	-> Generate practice questions mpaka target
	-> Render subject cards
	-> Chagua subject
	-> Chagua level
	-> Tengeneza shuffled unique pool
	-> Load batch ya maswali 10
	-> Jibu kila swali
	-> Record correct/incorrect
	-> Maliza batch
	-> Continue au See Results
	-> Onyesha final results
	-> Start New Quiz, Change Level, New Subject au Quit
```
