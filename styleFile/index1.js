// ************************************* navbar *********************************************
const navbarIcon = document.getElementById("bars");
const navbarBody = document.getElementById("list_item");

const song = new Audio("navbarIconImg/navClick.mp3.mp3");
navbarIcon.addEventListener("click", () => {
    navbarBody.classList.toggle("active");
    song.play();
})

// list item sound effeact with click navbar 
const clickSound = document.querySelectorAll(".clickSound");
const sound = new Audio("navbarIconImg/click.mp3.mp3");
clickSound.forEach( (clickMusice) => {
    clickMusice.addEventListener("click", () => {
        sound.play();
    })
})
// ************************************* search button *********************************************
const searchButton = document.querySelectorAll(".searchClick");
const serachInput = document.getElementById("searchInput");
const searchBodyBox = document.querySelector(".searchBox");
const angleLeft = document.getElementById("angleLeftButton");

serachInput.addEventListener("click", () => {
    searchBodyBox.classList.add("searchInputBox");
    // navbar body with text 
    searchButton.forEach( (searchBoxInput) => {
    searchBoxInput.style.display = "none";
   })
})

angleLeft.addEventListener("click", () => {
    searchBodyBox.classList.remove("searchInputBox");
    // navbar body with text 
    searchButton.forEach( (searchBoxInput) => {
    searchBoxInput.style.display = "block";
   })
})

// work in page refresh 
const pageRefresh = document.querySelector(".angleLeft");

pageRefresh.addEventListener("click", () => {
    location.reload();
})
// ************************************* input search function *********************************************
const searchFilter = document.getElementById("keyup");

const searchKyeup = () => {
    let filterValue = document.querySelector(".inputKey").value.toUpperCase();
    let myFlag = document.getElementById("myFlag");
    let li = myFlag.getElementsByTagName("li");

    // for loop 
    for(let i = 0; i < li.length; i++){
        let a = li[i].getElementsByTagName("p")[0];
        
        if(a){
            let textValue = a.textContent || a.innerHTML;

            if(textValue.toUpperCase().indexOf(filterValue) > -1){
                li[i].style.display = "";
            }else{
                li[i].style.display = "none";
            }
        }
    }

};

searchFilter.addEventListener("keyup", searchKyeup);

// ************************************* scroll button *********************************************
const scrollTop = document.querySelector(".scrollTop");
// const scrollWindow = window.pageYOffset;

window.addEventListener("scroll", () => {
    if(window.pageYOffset > 250){
    scrollTop.classList.add("scrollButton");
  }else{
      scrollTop.classList.remove("scrollButton");
  }
})

// ************************************* passport date *********************************************
const passpoertDate = document.getElementById("dataPassoprt");
const passPortCurrent = new Date();

passpoertDate.innerHTML = `${passPortCurrent.getFullYear()}`;
passpoertDate.style.color = "#ded9d9cf";
passpoertDate.style.fontWeight = "bold";

// ************************************* Passpoart Object *********************************************
const countryPassport = [
    {
        id : 0,
        countryName : "AFGHANISTAN",
        countryImg : "passportPopImg/af.png.png",
        score : 30,
        rank : 80,
        indivisdualRank : 199
    },
    {
        id : 1,
        countryName : "ALBANIA",
        countryImg : "passportPopImg/al.png.png",
        score : 70,
        rank : 45,
        indivisdualRank : 103
    },
    {
        id : 2,
        countryName : "ALGERIA",
        countryImg : "passportPopImg/dz.png.png",
        score : 53,
        rank : 61,
        indivisdualRank : 152
    },
    {
        id : 3,
        countryName : "ANDORRA",
        countryImg : "passportPopImg/ad.png.png",
        score : 114,
        rank : 14,
        indivisdualRank : 41
    },
    {
        id : 4,
        countryName : "ANGOLA",
        countryImg : "passportPopImg/ao.png.png",
        score : 51,
        rank : 63,
        indivisdualRank : 159
    },
    {
        id : 5,
        countryName : "ANTIGUA AND BARBUDA",
        countryImg : "passportPopImg/ag.png.png",
        score : 90,
        rank : 27,
        indivisdualRank : 60
    },
    {
        id : 6,
        countryName : "ARGENTINA",
        countryImg : "passportPopImg/ar.png.png",
        score : 97,
        rank : 22,
        indivisdualRank : 49
    },
    {
        id : 7,
        countryName : "ARMENIA",
        countryImg : "passportPopImg/am.png.png",
        score : 60,
        rank : 54,
        indivisdualRank : 127
    },
    {
        id : 8,
        countryName : "AUSTRALIA",
        countryImg : "passportPopImg/au.png.png",
        score : 129,
        rank : 7,
        indivisdualRank : 29
    },
    {
        id : 9,
        countryName : "AUSTRIA",
        countryImg : "passportPopImg/at.png.png",
        score : 133,
        rank : 3,
        indivisdualRank : 6
    },
    {
        id : 10,
        countryName : "AZERBAIJAN",
        countryImg : "passportPopImg/az.png.png",
        score : 65,
        rank : 49,
        indivisdualRank : 114
    },
    {
        id : 11,
        countryName : "BAHAMAS",
        countryImg : "passportPopImg/bs.png.png",
        score : 92,
        rank : 26,
        indivisdualRank : 55
    },
    {
        id : 12,
        countryName : "BAHRAIN",
        countryImg : "passportPopImg/bh.png.png",
        score : 75,
        rank : 40,
        indivisdualRank : 90
    },
    {
        id : 13,
        countryName : "BANGLADESH",
        countryImg : "passportPopImg/bd.png.png",
        score : 43,
        rank : 71,
        indivisdualRank : 183
    },
    {
        id : 14,
        countryName : "BARBADOS",
        countryImg : "passportPopImg/bb.png.png",
        score : 96,
        rank : 23,
        indivisdualRank : 51
    },
    {
        id : 15,
        countryName : "BELARUS",
        countryImg : "passportPopImg/by.png.png",
        score : 70,
        rank : 45,
        indivisdualRank : 106
    },
    {
        id : 16,
        countryName : "BELGIUM",
        countryImg : "passportPopImg/be.png.png",
        score : 132,
        rank : 4,
        indivisdualRank : 11
    },
    {
        id : 17,
        countryName : "BELIZE",
        countryImg : "passportPopImg/bz.png.png",
        score : 77,
        rank : 38,
        indivisdualRank : 82
    },
    {
        id : 18,
        countryName : "BENIN",
        countryImg : "passportPopImg/bj.png.png",
        score : 53,
        rank : 61,
        indivisdualRank : 148
    },
    {
        id : 19,
        countryName : "BHUTAN",
        countryImg : "passportPopImg/bt.png.png",
        score : 53,
        rank : 61,
        indivisdualRank : 153
    },
    {
        id : 20,
        countryName : "BOLIVIA",
        countryImg : "passportPopImg/bo.png.png",
        score : 66,
        rank : 48,
        indivisdualRank : 111
    },
    {
        id : 21,
        countryName : "BOSNIA AND HERZEGOVINA",
        countryImg : "passportPopImg/ba.png.png",
        score : 74,
        rank : 41,
        indivisdualRank : 93
    },
    {
        id : 22,
        countryName : "BOTSWANA",
        countryImg : "passportPopImg/bw.png.png",
        score : 68,
        rank : 46,
        indivisdualRank : 107
    },
    {
        id : 23,
        countryName : "BRAZIL",
        countryImg : "passportPopImg/br.png.png",
        score : 100,
        rank : 20,
        indivisdualRank : 47
    },
    {
        id : 24,
        countryName : "BRUNEI",
        countryImg : "passportPopImg/bn.png.png",
        score : 92,
        rank : 26,
        indivisdualRank : 56
    },
    {
        id : 25,
        countryName : "BULGARIA",
        countryImg : "passportPopImg/bg.png.png",
        score : 126,
        rank : 10,
        indivisdualRank : 36
    },
    {
        id : 26,
        countryName : "BURKINA FASO",
        countryImg : "passportPopImg/bf.png.png",
        score : 54,
        rank : 60,
        indivisdualRank : 146
    },
    {
        id : 27,
        countryName : "BURUNDI",
        countryImg : "passportPopImg/bi.png.png",
        score : 49,
        rank : 65,
        indivisdualRank : 167
    },
    {
        id : 28,
        countryName : "CAMBODIA",
        countryImg : "passportPopImg/kh.png.png",
        score : 51,
        rank : 63,
        indivisdualRank : 160
    },
    {
        id : 29,
        countryName : "CAMEROON",
        countryImg : "passportPopImg/cm.png.png",
        score : 49,
        rank : 65,
        indivisdualRank : 166
    },
    {
        id : 30,
        countryName : "CANADA",
        countryImg : "passportPopImg/ca.png.png",
        score : 109,
        rank : 16,
        indivisdualRank : 43
    },
    {
        id : 31,
        countryName : "CAPE VERDE",
        countryImg : "passportPopImg/cv.png.png",
        score : 59,
        rank : 55,
        indivisdualRank : 132
    },
    {
        id : 32,
        countryName : "CENTRAL AFRICAN REPUBLIC",
        countryImg : "passportPopImg/cf.png.png",
        score : 47,
        rank : 67,
        indivisdualRank : 173
    },
    {
        id : 33,
        countryName : "CHAD",
        countryImg : "passportPopImg/td.png.png",
        score : 47,
        rank : 67,
        indivisdualRank : 172
    },
    {
        id : 34,
        countryName : "CHILE",
        countryImg : "passportPopImg/cl.png.png",
        score : 98,
        rank : 21,
        indivisdualRank : 48
    },
    {
        id : 35,
        countryName : "CHINA",
        countryImg : "passportPopImg/cn.png.png",
        score : 60,
        rank : 54,
        indivisdualRank : 128
    },
    {
        id : 36,
        countryName : "COLOMBIA",
        countryImg : "passportPopImg/co.png.png",
        score : 76,
        rank : 39,
        indivisdualRank : 86
    },
    {
        id : 37,
        countryName : "COMOROS",
        countryImg : "passportPopImg/km.png.png",
        score : 48,
        rank : 66,
        indivisdualRank : 169
    },
    {
        id : 38,
        countryName : "CONGO",
        countryImg : "passportPopImg/cg.png.png",
        score : 44,
        rank : 70,
        indivisdualRank : 182
    },
    {
        id : 39,
        countryName : "CONGO (DEM. REP.)",
        countryImg : "passportPopImg/cd.png.png",
        score : 44,
        rank : 70,
        indivisdualRank : 180
    },
    {
        id : 40,
        countryName : "COSTA RICA",
        countryImg : "passportPopImg/cr.png.png",
        score : 87,
        rank : 29,
        indivisdualRank : 63
    },
    {
        id : 41,
        countryName : "COTE D'IVOIRE (IVORY COAST)",
        countryImg : "passportPopImg/ci.png.png",
        score : 55,
        rank : 59,
        indivisdualRank : 143
    },
    {
        id : 42,
        countryName : "CROATIA",
        countryImg : "passportPopImg/hr.png.png",
        score : 126,
        rank : 10,
        indivisdualRank : 34
    },
    {
        id : 43,
        countryName : "CUBA",
        countryImg : "passportPopImg/cu.png.png",
        score : 60,
        rank : 54,
        indivisdualRank : 126
    },
    {
        id : 44,
        countryName : "CYPRUS",
        countryImg : "passportPopImg/cy.png.png",
        score : 126,
        rank : 10,
        indivisdualRank : 33
    },
    {
        id : 45,
        countryName : "CZECH REPUBLIC",
        countryImg : "passportPopImg/cz.png.png",
        score : 131,
        rank : 5,
        indivisdualRank : 18
    },
    {
        id : 46,
        countryName : "DENMARK",
        countryImg : "passportPopImg/dk.png.png",
        score : 132,
        rank : 4,
        indivisdualRank : 9
    },
    {
        id : 47,
        countryName : "DJIBOUTI",
        countryImg : "passportPopImg/dj.png.png",
        score : 45,
        rank : 69,
        indivisdualRank : 176
    },
    {
        id : 48,
        countryName : "DOMINICA",
        countryImg : "passportPopImg/dm.png.png",
        score : 81,
        rank : 34,
        indivisdualRank : 76
    },
    {
        id : 49,
        countryName : "DOMINICAN REPUBLIC",
        countryImg : "passportPopImg/do.png.png",
        score : 58,
        rank : 56,
        indivisdualRank : 139
    },
    {
        id : 50,
        countryName : "ECUADOR",
        countryImg : "passportPopImg/ec.png.png",
        score : 74,
        rank : 41,
        indivisdualRank : 97
    },
    {
        id : 51,
        countryName : "EGYPT",
        countryImg : "passportPopImg/eg.png.png",
        score : 50,
        rank : 64,
        indivisdualRank : 164
    },
    {
        id : 52,
        countryName : "EL SALVADOR",
        countryImg : "passportPopImg/sv.png.png",
        score : 776,
        rank : 39,
        indivisdualRank : 87
    },
    {
        id : 53,
        countryName : "EQUATORIAL GUINEA",
        countryImg : "passportPopImg/gq.png.png",
        score : 50,
        rank : 64,
        indivisdualRank : 163
    },
    {
        id : 54,
        countryName : "ERITREA",
        countryImg : "passportPopImg/er.png.png",
        score : 41,
        rank : 73,
        indivisdualRank : 190
    },
    {
        id : 55,
        countryName : "ESTONIA",
        countryImg : "passportPopImg/ee.png.png",
        score : 129,
        rank : 7,
        indivisdualRank : 27
    },
    {
        id : 56,
        countryName : "ESWATINI",
        countryImg : "passportPopImg/sz.png.png",
        score : 62,
        rank : 52,
        indivisdualRank : 122
    },
    {
        id : 57,
        countryName : "ETHIOPIA",
        countryImg : "passportPopImg/et.png.png",
        score : 42,
        rank : 72,
        indivisdualRank : 188
    },
    {
        id : 58,
        countryName : "FIJI",
        countryImg : "passportPopImg/fj.png.png",
        score : 74,
        rank : 41,
        indivisdualRank : 94
    },
    {
        id : 59,
        countryName : "FINLAND",
        countryImg : "passportPopImg/fi.png.png",
        score : 134,
        rank : 2,
        indivisdualRank : 2
    },
    {
        id : 60,
        countryName : "FRANCE",
        countryImg : "passportPopImg/fr.png.png",
        score : 132,
        rank : 4,
        indivisdualRank : 12
    },
    {
        id : 61,
        countryName : "GABON",
        countryImg : "passportPopImg/ga.png.png",
        score : 52,
        rank : 62,
        indivisdualRank : 155
    },
    {
        id : 62,
        countryName : "GAMBIA",
        countryImg : "passportPopImg/gm.png.png",
        score : 59,
        rank : 55,
        indivisdualRank : 130
    },
    {
        id : 63,
        countryName : "GAMBIA",
        countryImg : "passportPopImg/ge.png.png",
        score : 82,
        rank : 33,
        indivisdualRank : 73
    },
    {
        id : 64,
        countryName : "GERMANY",
        countryImg : "passportPopImg/de.png.png",
        score : 135,
        rank : 1,
        indivisdualRank : 1
    },
    {
        id : 65,
        countryName : "GHANA",
        countryImg : "passportPopImg/gh.png.png",
        score : 59,
        rank : 55,
        indivisdualRank : 131
    },
    {
        id : 66,
        countryName : "GREECE",
        countryImg : "passportPopImg/gr.png.png",
        score : 132,
        rank : 4,
        indivisdualRank : 14
    },
    {
        id : 67,
        countryName : "GRENADA",
        countryImg : "passportPopImg/gd.png.png",
        score : 81,
        rank : 34,
        indivisdualRank : 75
    },
    {
        id : 68,
        countryName : "GUATEMALA",
        countryImg : "passportPopImg/gt.png.png",
        score : 74,
        rank : 41,
        indivisdualRank : 96
    },
    {
        id : 69,
        countryName : "GUINEA",
        countryImg : "passportPopImg/gn.png.png",
        score : 49,
        rank : 65,
        indivisdualRank : 165
    },
    {
        id : 70,
        countryName : "GUINEA-BISSAU",
        countryImg : "passportPopImg/gw.png.png",
        score : 51,
        rank : 63,
        indivisdualRank : 157
    },
    {
        id : 71,
        countryName : "GUYANA",
        countryImg : "passportPopImg/gy.png.png",
        score : 70,
        rank : 45,
        indivisdualRank : 102
    },
    {
        id : 72,
        countryName : "HAITI",
        countryImg : "passportPopImg/ht.png.png",
        score : 45,
        rank : 69,
        indivisdualRank : 177
    },
    {
        id : 73,
        countryName : "HONDURAS",
        countryImg : "passportPopImg/hn.png.png",
        score : 75,
        rank : 40,
        indivisdualRank : 89
    },
    {
        id : 74,
        countryName : "HONG KONG",
        countryImg : "passportPopImg/hk.png.png",
        score : 94,
        rank : 24,
        indivisdualRank : 53
    },
    {
        id : 75,
        countryName : "HUNGARY",
        countryImg : "passportPopImg/hu.png.png",
        score : 132,
        rank : 4,
        indivisdualRank : 15
    },
    {
        id : 76,
        countryName : "ICELAND",
        countryImg : "passportPopImg/is.png.png",
        score : 128,
        rank : 8,
        indivisdualRank : 30
    },
    {
        id : 77,
        countryName : "INDIA",
        countryImg : "passportPopImg/in.png.png",
        score : 54,
        rank : 60,
        indivisdualRank : 147
    },
    {
        id : 78,
        countryName : "INDONESIA",
        countryImg : "passportPopImg/id.png.png",
        score : 63,
        rank : 51,
        indivisdualRank : 121
    },
    {
        id : 79,
        countryName : "IRAN",
        countryImg : "passportPopImg/ir.png.png",
        score : 37,
        rank : 75,
        indivisdualRank : 193
    },
    {
        id : 80,
        countryName : "IRAQ",
        countryImg : "passportPopImg/iq.png.png",
        score : 31,
        rank : 79,
        indivisdualRank : 198
    },
    {
        id : 81,
        countryName : "IRELAND",
        countryImg : "passportPopImg/ie.png.png",
        score : 133,
        rank : 3,
        indivisdualRank : 8
    },
    {
        id : 82,
        countryName : "ISRAEL",
        countryImg : "passportPopImg/il.png.png",
        score : 93,
        rank : 25,
        indivisdualRank : 54
    },
    {
        id : 83,
        countryName : "ITALY",
        countryImg : "passportPopImg/it.png.png",
        score : 133,
        rank : 3,
        indivisdualRank : 7
    },
    {
        id : 84,
        countryName : "JAMAICA",
        countryImg : "passportPopImg/jm.png.png",
        score : 75,
        rank : 40,
        indivisdualRank : 88
    },
    {
        id : 85,
        countryName : "JAPAN",
        countryImg : "passportPopImg/jp.png.png",
        score : 128,
        rank : 8,
        indivisdualRank : 31
    },
    {
        id : 86,
        countryName : "JORDAN",
        countryImg : "passportPopImg/jo.png.png",
        score : 53,
        rank : 61,
        indivisdualRank : 151
    },
    {
        id : 87,
        countryName : "KAZAKHSTAN",
        countryImg : "passportPopImg/kz.png.png",
        score : 68,
        rank : 46,
        indivisdualRank : 109
    },
    {
        id : 88,
        countryName : "KENYA",
        countryImg : "passportPopImg/ke.png.png",
        score : 61,
        rank : 53,
        indivisdualRank : 125
    },
    {
        id : 89,
        countryName : "KIRIBATI",
        countryImg : "passportPopImg/ki.png.png",
        score : 74,
        rank : 41,
        indivisdualRank : 92
    },
    {
        id : 90,
        countryName : "KOSOVO",
        countryImg : "passportPopImg/xk.png.png",
        score : 45,
        rank : 69,
        indivisdualRank : 175
    },
    {
        id : 91,
        countryName : "KUWAIT",
        countryImg : "passportPopImg/kw.png.png",
        score : 83,
        rank : 32,
        indivisdualRank : 68
    },
    {
        id : 92,
        countryName : "KYRGYZSTAN",
        countryImg : "passportPopImg/kg.png.png",
        score : 60,
        rank : 54,
        indivisdualRank : 129
    },
    {
        id : 93,
        countryName : "LAOS",
        countryImg : "passportPopImg/la.png.png",
        score : 46,
        rank : 68,
        indivisdualRank : 174
    },
    {
        id : 94,
        countryName : "LATVIA",
        countryImg : "passportPopImg/lv.png.png",
        score : 129,
        rank : 7,
        indivisdualRank : 28
    },
    {
        id : 95,
        countryName : "LEBANON",
        countryImg : "passportPopImg/lb.png.png",
        score : 44,
        rank : 70,
        indivisdualRank : 181
    },
    {
        id : 96,
        countryName : "LESOTHO",
        countryImg : "passportPopImg/is.png.png",
        score : 65,
        rank : 49,
        indivisdualRank : 113
    },
    {
        id : 97,
        countryName : "LIBERIA",
        countryImg : "passportPopImg/ir.png.png",
        score : 47,
        rank : 67,
        indivisdualRank : 171
    },
    {
        id : 98,
        countryName : "LIBYA",
        countryImg : "passportPopImg/ly.png.png",
        score : 43,
        rank : 71,
        indivisdualRank : 185
    },
    {
        id : 99,
        countryName : "LIECHTENSTEIN",
        countryImg : "passportPopImg/li.png.png",
        score : 127,
        rank : 9,
        indivisdualRank : 32
    },
    {
        id : 100,
        countryName : "LITHUANIA",
        countryImg : "passportPopImg/lt.png.png",
        score : 130,
        rank : 6,
        indivisdualRank : 24
    },
    {
        id : 101,
        countryName : "LUXEMBOURG",
        countryImg : "passportPopImg/lu.png.png",
        score : 131,
        rank : 5,
        indivisdualRank : 17
    },
    {
        id : 102,
        countryName : "MACAO",
        countryImg : "passportPopImg/mo.png.png",
        score : 82,
        rank : 33,
        indivisdualRank : 70
    },
    {
        id : 103,
        countryName : "MADAGASCAR",
        countryImg : "passportPopImg/mg.png.png",
        score : 52,
        rank : 62,
        indivisdualRank : 154
    },
    {
        id : 104,
        countryName : "MALAWI",
        countryImg : "passportPopImg/mw.png.png",
        score : 63,
        rank : 51,
        indivisdualRank : 119
    },

    {
        id : 105,
        countryName : "MALAYSIA",
        countryImg : "passportPopImg/my.png.png",
        score : 101,
        rank : 19,
        indivisdualRank : 46
    },
    {
        id : 106,
        countryName : "MALDIVES",
        countryImg : "passportPopImg/mv.png.png",
        score : 74,
        rank : 41,
        indivisdualRank : 95
    },
    {
        id : 107,
        countryName : "MALI",
        countryImg : "passportPopImg/ml.png.png",
        score : 48,
        rank : 66,
        indivisdualRank : 168
    },
    {
        id : 108,
        countryName : "MALTA",
        countryImg : "passportPopImg/mt.png.png",
        score : 130,
        rank : 6,
        indivisdualRank : 22
    },
    {
        id : 109,
        countryName : "MARSHALL ISLANDS",
        countryImg : "passportPopImg/mh.png.png",
        score : 72,
        rank : 43,
        indivisdualRank : 100
    },
    {
        id : 110,
        countryName : "MAURITANIA",
        countryImg : "passportPopImg/mr.png.png",
        score : 51,
        rank : 63,
        indivisdualRank : 158
    },
    {
        id : 111,
        countryName : "MAURITIUS",
        countryImg : "passportPopImg/mu.png.png",
        score : 85,
        rank : 31,
        indivisdualRank : 65
    },
    {
        id : 112,
        countryName : "MEXICO",
        countryImg : "passportPopImg/mx.png.png",
        score : 92,
        rank : 26,
        indivisdualRank : 57
    },
    {
        id : 113,
        countryName : "MICRONESIA",
        countryImg : "passportPopImg/fm.png.png",
        score : 67,
        rank : 47,
        indivisdualRank : 110
    },
    {
        id : 114,
        countryName : "MOLDOVA",
        countryImg : "passportPopImg/md.png.png",
        score : 70,
        rank : 45,
        indivisdualRank : 104
    },
    {
        id : 115,
        countryName : "MONACO",
        countryImg : "passportPopImg/mc.png.png",
        score : 122,
        rank : 11,
        indivisdualRank : 37
    },
    {
        id : 116,
        countryName : "MONGOLIA",
        countryImg : "passportPopImg/mn.png.png",
        score : 53,
        rank : 61,
        indivisdualRank : 150
    },

    {
        id : 117,
        countryName : "MONTENEGRO",
        countryImg : "passportPopImg/me.png.png",
        score : 72,
        rank : 43,
        indivisdualRank : 99
    },
    {
        id : 118,
        countryName : "MOROCCO",
        countryImg : "passportPopImg/ma.png.png",
        score : 58,
        rank : 56,
        indivisdualRank : 137
    },
    {
        id : 119,
        countryName : "MOZAMBIQUE",
        countryImg : "passportPopImg/mz.png.png",
        score : 55,
        rank : 59,
        indivisdualRank : 144
    },
    {
        id : 120,
        countryName : "MYANMAR [BURMA]",
        countryImg : "passportPopImg/mm.png.png",
        score : 41,
        rank : 73,
        indivisdualRank : 191
    },
    {
        id : 121,
        countryName : "NAMIBIA",
        countryImg : "passportPopImg/na.png.png",
        score : 64,
        rank : 50,
        indivisdualRank : 115
    },
    {
        id : 122,
        countryName : "NAURU",
        countryImg : "passportPopImg/nr.png.png",
        score : 68,
        rank : 46,
        indivisdualRank : 108
    },
    {
        id : 123,
        countryName : "NEPAL",
        countryImg : "passportPopImg/np.png.png",
        score : 42,
        rank : 72,
        indivisdualRank : 189
    },
    {
        id : 124,
        countryName : "NETHERLANDS",
        countryImg : "passportPopImg/nl.png.png",
        score : 132,
        rank : 4,
        indivisdualRank : 10
    },
    {
        id : 125,
        countryName : "NEW ZEALAND",
        countryImg : "passportPopImg/nz.png.png",
        score : 132,
        rank : 4,
        indivisdualRank : 16
    },
    {
        id : 126,
        countryName : "NICARAGUA",
        countryImg : "passportPopImg/ni.png.png",
        score : 73,
        rank : 42,
        indivisdualRank : 98
    },
    {
        id : 127,
        countryName : "NIGER",
        countryImg : "passportPopImg/ne.png.png",
        score : 50,
        rank : 64,
        indivisdualRank : 161
    },
    {
        id : 128,
        countryName : "NIGERIA",
        countryImg : "passportPopImg/ng.png.png",
        score : 44,
        rank : 70,
        indivisdualRank : 178
    },
    {
        id : 129,
        countryName : "NORTH KOREA",
        countryImg : "passportPopImg/kp.png.png",
        score : 43,
        rank : 71,
        indivisdualRank : 187
    },
    {
        id : 130,
        countryName : "NORTH MACEDONIA",
        countryImg : "passportPopImg/mk.png.png",
        score : 75,
        rank : 40,
        indivisdualRank : 91
    },
    {
        id : 131,
        countryName : "NORWAY",
        countryImg : "passportPopImg/no.png.png",
        score : 131,
        rank : 5,
        indivisdualRank : 19
    },
    {
        id : 132,
        countryName : "OMAN",
        countryImg : "passportPopImg/om.png.png",
        score : 71,
        rank : 44,
        indivisdualRank : 101
    },
    {
        id : 133,
        countryName : "PAKISTAN",
        countryImg : "passportPopImg/pk.png.png",
        score : 36,
        rank : 76,
        indivisdualRank : 195
    },
    {
        id : 134,
        countryName : "PALAU",
        countryImg : "passportPopImg/pw.png.png",
        score : 66,
        rank : 48,
        indivisdualRank : 112
    },
    {
        id : 135,
        countryName : "PALESTINIAN TERRITORIES",
        countryImg : "passportPopImg/ps.png.png",
        score : 38,
        rank : 74,
        indivisdualRank : 192
    },
    {
        id : 136,
        countryName : "PANAMA",
        countryImg : "passportPopImg/pa.png.png",
        score : 82,
        rank : 33,
        indivisdualRank : 72
    },
    {
        id : 137,
        countryName : "PAPUA NEW GUINEA",
        countryImg : "passportPopImg/pg.png.png",
        score : 64,
        rank : 50,
        indivisdualRank : 117
    },
    {
        id : 138,
        countryName : "PARAGUAY",
        countryImg : "passportPopImg/py.png.png",
        score : 82,
        rank : 33,
        indivisdualRank : 74
    },
    {
        id : 139,
        countryName : "PERU",
        countryImg : "passportPopImg/pe.png.png",
        score : 83,
        rank : 32,
        indivisdualRank : 69
    },
    {
        id : 140,
        countryName : "PHILIPPINES",
        countryImg : "passportPopImg/ph.png.png",
        score : 53,
        rank : 61,
        indivisdualRank : 149
    },
    {
        id : 141,
        countryName : "POLAND",
        countryImg : "passportPopImg/pl.png.png",
        score : 131,
        rank : 5,
        indivisdualRank : 20
    },
    {
        id : 142,
        countryName : "PORTUGAL",
        countryImg : "passportPopImg/pt.png.png",
        score : 132,
        rank : 4,
        indivisdualRank : 13
    },
    {
        id : 143,
        countryName : "QATAR",
        countryImg : "passportPopImg/qa.png.png",
        score : 85,
        rank : 31,
        indivisdualRank : 66
    },
    {
        id : 144,
        countryName : "ROMANIA",
        countryImg : "passportPopImg/ro.png.png",
        score : 126,
        rank : 10,
        indivisdualRank : 35
    },
    {
        id : 145,
        countryName : "RUSSIAN FEDERATION",
        countryImg : "passportPopImg/ru.png.png",
        score : 96,
        rank : 23,
        indivisdualRank : 52
    },
    {
        id : 146,
        countryName : "RWANDA",
        countryImg : "passportPopImg/rw.png.png",
        score : 59,
        rank : 55,
        indivisdualRank : 133
    },
    {
        id : 147,
        countryName : "SAINT KITTS AND NEVIS",
        countryImg : "passportPopImg/kn.png.png",
        score : 90,
        rank : 27,
        indivisdualRank : 59
    },
    {
        id : 148,
        countryName : "SAINT LUCIA",
        countryImg : "passportPopImg/lc.png.png",
        score : 83,
        rank : 32,
        indivisdualRank : 67
    },
    {
        id : 149,
        countryName : "SAMOA",
        countryImg : "passportPopImg/ws.png.png",
        score : 77,
        rank : 38,
        indivisdualRank : 83
    },
    {
        id : 150,
        countryName : "SAN MARINO",
        countryImg : "passportPopImg/sm.png.png",
        score : 119,
        rank : 12,
        indivisdualRank : 39
    },
    {
        id : 151,
        countryName : "SAO TOME AND PRINCIPE",
        countryImg : "passportPopImg/st.png.png",
        score : 58,
        rank : 56,
        indivisdualRank : 138
    },
    {
        id : 152,
        countryName : "SAUDI ARABIA",
        countryImg : "passportPopImg/sa.png.png",
        score : 70,
        rank : 45,
        indivisdualRank : 105
    },
    {
        id : 153,
        countryName : "SENEGAL",
        countryImg : "passportPopImg/sn.png.png",
        score : 54,
        rank : 60,
        indivisdualRank : 145
    },
    {
        id : 154,
        countryName : "SERBIA",
        countryImg : "passportPopImg/rs.png.png",
        score : 81,
        rank : 34,
        indivisdualRank : 77
    },
    {
        id : 155,
        countryName : "SEYCHELLES",
        countryImg : "passportPopImg/sc.png.png",
        score : 90,
        rank : 27,
        indivisdualRank : 58
    },
    {
        id : 156,
        countryName : "SIERRA LEONE",
        countryImg : "passportPopImg/sl.png.png",
        score : 56,
        rank : 58,
        indivisdualRank : 142
    },
    {
        id : 157,
        countryName : "SINGAPORE",
        countryImg : "passportPopImg/sg.png.png",
        score : 119,
        rank : 12,
        indivisdualRank : 38
    },
    {
        id : 158,
        countryName : "SLOVENIA",
        countryImg : "passportPopImg/sk.png.png",
        score : 130,
        rank : 6,
        indivisdualRank : 25
    },
    {
        id : 159,
        countryName : "SOLOMON ISLANDS",
        countryImg : "passportPopImg/sb.png.png",
        score : 80,
        rank : 35,
        indivisdualRank : 78
    },
    {
        id : 160,
        countryName : "SOMALIA",
        countryImg : "passportPopImg/so.png.png",
        score : 34,
        rank : 77,
        indivisdualRank : 196
    },
    {
        id : 161,
        countryName : "SOUTH AFRICA",
        countryImg : "passportPopImg/za.png.png",
        score : 82,
        rank : 33,
        indivisdualRank : 71
    },
    {
        id : 162,
        countryName : "SOUTH KOREA",
        countryImg : "passportPopImg/kr.png.png",
        score : 131,
        rank : 55,
        indivisdualRank : 21
    },
    {
        id : 163,
        countryName : "SOUTH SUDAN",
        countryImg : "passportPopImg/ss.png.png",
        score : 44,
        rank : 70,
        indivisdualRank : 179
    },
    {
        id : 164,
        countryName : "SPAIN",
        countryImg : "passportPopImg/es.png.png",
        score : 134,
        rank : 2,
        indivisdualRank : 3
    },
    {
        id : 165,
        countryName : "SRI LANKA",
        countryImg : "passportPopImg/lk.png.png",
        score : 43,
        rank : 71,
        indivisdualRank : 184
    },
    {
        id : 166,
        countryName : "ST. VINCENT AND THE GRENADINES",
        countryImg : "passportPopImg/vc.png.png",
        score : 87,
        rank : 29,
        indivisdualRank : 62
    },
    {
        id : 167,
        countryName : "SUDAN",
        countryImg : "passportPopImg/sd.png.png",
        score : 43,
        rank : 71,
        indivisdualRank : 186
    },
    {
        id : 168,
        countryName : "SURINAME",
        countryImg : "passportPopImg/sr.png.png",
        score : 64,
        rank : 50,
        indivisdualRank : 118
    },
    {
        id : 169,
        countryName : "SWEDEN",
        countryImg : "passportPopImg/se.png.png",
        score : 133,
        rank : 3,
        indivisdualRank : 5
    },
    {
        id : 170,
        countryName : "SWITZERLAND",
        countryImg : "passportPopImg/ch.png.png",
        score : 134,
        rank : 2,
        indivisdualRank : 4
    },
    {
        id : 171,
        countryName : "SYRIA",
        countryImg : "passportPopImg/sy.png.png",
        score : 32,
        rank : 78,
        indivisdualRank : 197
    },
    {
        id : 172,
        countryName : "TAIWAN",
        countryImg : "passportPopImg/tw.png.png",
        score : 78,
        rank : 37,
        indivisdualRank : 81
    },
    {
        id : 173,
        countryName : "TAJIKISTAN",
        countryImg : "passportPopImg/tj.png.png",
        score : 57,
        rank : 57,
        indivisdualRank : 140
    },
    {
        id : 174,
        countryName : "TANZANIA",
        countryImg : "passportPopImg/tz.png.png",
        score : 61,
        rank : 53,
        indivisdualRank : 124
    },
    {
        id : 175,
        countryName : "THAILAND",
        countryImg : "passportPopImg/th.png.png",
        score : 62,
        rank : 52,
        indivisdualRank : 123
    },
    {
        id : 176,
        countryName : "TIMOR-LESTE",
        countryImg : "passportPopImg/tl.png.png",
        score : 57,
        rank : 57,
        indivisdualRank : 141
    },
    {
        id : 177,
        countryName : "TOGO",
        countryImg : "passportPopImg/tg.png.png",
        score : 50,
        rank : 64,
        indivisdualRank : 162
    },
    {
        id : 178,
        countryName : "TONGA",
        countryImg : "passportPopImg/to.png.png",
        score : 76,
        rank : 39,
        indivisdualRank : 85
    },
    {
        id : 179,
        countryName : "TRINIDAD AND TOBAGO",
        countryImg : "passportPopImg/tt.png.png",
        score : 86,
        rank : 30,
        indivisdualRank : 64
    },
    {
        id : 180,
        countryName : "TUNISIA",
        countryImg : "passportPopImg/tn.png.png",
        score : 64,
        rank : 50,
        indivisdualRank : 116
    },
    {
        id : 181,
        countryName : "TURKEY",
        countryImg : "passportPopImg/tr.png.png",
        score : 97,
        rank : 22,
        indivisdualRank : 50
    },
    {
        id : 182,
        countryName : "TURKMENISTAN",
        countryImg : "passportPopImg/tm.png.png",
        score : 52,
        rank : 62,
        indivisdualRank : 156
    },
    {
        id : 183,
        countryName : "TUVALU",
        countryImg : "passportPopImg/tv.png.png",
        score : 76,
        rank : 39,
        indivisdualRank : 84
    },
    {
        id : 184,
        countryName : "UGANDA",
        countryImg : "passportPopImg/ug.png.png",
        score : 58,
        rank : 56,
        indivisdualRank : 136
    },
    {
        id : 185,
        countryName : "UKRAINE",
        countryImg : "passportPopImg/ua.png.png",
        score : 88,
        rank : 28,
        indivisdualRank : 61
    },
    {
        id : 186,
        countryName : "UNITED ARAB EMIRATES",
        countryImg : "passportPopImg/ae.png.png",
        score : 118,
        rank : 13,
        indivisdualRank : 40
    },
    {
        id : 187,
        countryName : "UNITED KINGDOM",
        countryImg : "passportPopImg/gb.png.png",
        score : 130,
        rank : 6,
        indivisdualRank : 26
    },
    {
        id : 188,
        countryName : "UNITED STATES OF AMERICA",
        countryImg : "passportPopImg/us.png.png",
        score : 104,
        rank : 18,
        indivisdualRank : 45
    },
    {
        id : 189,
        countryName : "URUGUAY",
        countryImg : "passportPopImg/uy.png.png",
        score : 108,
        rank : 17,
        indivisdualRank : 44
    },
    {
        id : 190,
        countryName : "UZBEKISTAN",
        countryImg : "passportPopImg/uz.png.png",
        score : 59,
        rank : 55,
        indivisdualRank : 134
    },
    {
        id : 191,
        countryName : "VANUATU",
        countryImg : "passportPopImg/vu.png.png",
        score : 78,
        rank : 37,
        indivisdualRank : 80
    },
    {
        id : 192,
        countryName : "VATICAN CITY",
        countryImg : "passportPopImg/va.png.png",
        score : 112,
        rank : 15,
        indivisdualRank : 42
    },
    {
        id : 193,
        countryName : "VENEZUELA",
        countryImg : "passportPopImg/ve.png.png",
        score : 79,
        rank : 36,
        indivisdualRank : 79
    },
    {
        id : 194,
        countryName : "VIET NAM",
        countryImg : "passportPopImg/vn.png.png",
        score : 48,
        rank : 66,
        indivisdualRank : 170
    },
    {
        id : 195,
        countryName : "YEMEN",
        countryImg : "passportPopImg/ye.png.png",
        score : 36,
        rank : 76,
        indivisdualRank : 194
    },
    {
        id : 196,
        countryName : "ZAMBIA",
        countryImg : "passportPopImg/zm.png.png",
        score : 63,
        rank : 51,
        indivisdualRank : 120
    },
    {
        id : 197,
        countryName : "ZIMBABWE",
        countryImg : "passportPopImg/zw.png.png",
        score : 58,
        rank : 56,
        indivisdualRank : 135
    }
]

// ************************************* Passpoart List *********************************************
const passportList = document.querySelectorAll(".passportList");
const passpoartPopsection = document.querySelector(".passpoartPopsection");
const popClose = document.getElementById("popClose");

passportList.forEach( (passportData) => {
    passportData.addEventListener("click", () => {
        passpoartPopsection.classList.add("popPassport");
    })
})

popClose.addEventListener("click", () => {
    passpoartPopsection.classList.remove("popPassport");
    location.reload();
})

const countryNamePassport = document.getElementById("countryNamePassport");
const countryPassportImage = document.getElementById("countryPassportImage");
const countryDataNumber1 = document.getElementById("countryDataNumber1");
const countryDataNumber2 = document.getElementById("countryDataNumber2");
const countryDataNumber3 = document.getElementById("countryDataNumber3");
let countryIndex = 0;

const countryFunction = () => {
    const index = countryPassport[countryIndex];
    countryNamePassport.textContent = index.countryName;
    countryPassportImage.src = index.countryImg;
    countryDataNumber1.textContent = index.score;
    countryDataNumber2.textContent = index.rank;
    countryDataNumber3.textContent = index.indivisdualRank;
}

window.addEventListener("DOMContentLoaded", () => {
    countryFunction();
})

// button arrow 
const angleButtonLeft = document.getElementById("angleButtonRight");
angleButtonLeft.addEventListener("click", () => {
    countryIndex++;
    if(countryIndex > countryPassport.length - 1){
        countryIndex = 0;
    }
    countryFunction();
})
const angleButtonRight = document.getElementById("angleButtonLeft");
angleButtonRight.addEventListener("click", () => {
    countryIndex--;
    if(countryIndex < 0){
        countryIndex = countryPassport.length - 1;
    }
    countryFunction();
})