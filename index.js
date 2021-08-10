$(()=> {
    const th = ['연도', '정규시즌 순위', '최종 순위', '승', '패', '무', '승률'];
    th.map((val=> { $('.tr_th').append(`<th>${val}</th`)}));

    // const d_b ==> doosan_bears
    const d_b = [
        {
            'year': 2016,
            'season_ranking':'1위',
            'ks_ranking': '우승',
            'win' : 93,
            'lose' : 50,
            'draw':1,
            'win_rate': '65%',
        },{
            'year': 2017,
            'season_ranking':'2위',
            'ks_ranking': '준우승',
            'win' : 84,
            'lose': 57,
            'draw': 3,
            'win_rate':'59%',
        },{
            'year': 2018,
            'season_ranking':'1위',
            'ks_ranking': '준우승',
            'win' : 93,
            'lose': 51,
            'draw': 0,
            'win_rate':'64%',
        },{
            'year': 2019,
            'season_ranking':'1위',
            'ks_ranking': '우승',
            'win' : 88,
            'lose': 55,
            'draw': 1,
            'win_rate':'61%',
        },{
            'year': 2020,
            'season_ranking':'3위',
            'ks_ranking': '준우승',
            'win' : 79,
            'lose': 61,
            'draw': 4,
            'win_rate':'56%',
        }
    ]
    d_b.map((val) => {
        let temp =`
        <tr>
        <td class="year">${val['year']}</td>
        <td class="season_ranking">${val['season_ranking']}</td>
        <td class="ks_ranking">${val['ks_ranking']}</td>
        <td class="win">${val['win']}</td>
        <td class="lose">${val['lose']}</td>
        <td class="draw">${val['draw']}</td>
        <td class="win_rate">${val['win_rate']}</td>
        </tr>
        `
        $('table.index_table').append(temp)
    })



    // card - code
    let card = [
        {
            'back_number':'50',
            'name':'이영하',
            'position':'투수',
            'hand':'우투',
            'birth':'1997',
            'url':'https://spotvcdnendpoint.azureedge.net/spotv/player/simage/20190315/20190315135136384.png'
        },{
            'back_number':'61',
            'name':'최원준',
            'position':'투수',
            'hand':'우사',
            'birth':'1994',
            'url':'https://spotvcdnendpoint.azureedge.net/spotv/player/simage/20190315/20190315135945534.png'
        },{
            'back_number':'42',
            'name':'윤명준',
            'position':'투수',
            'hand':'우투',
            'birth':'1989',
            'url':'https://spotvcdnendpoint.azureedge.net/spotv/player/simage/20190315/20190315135829134.png'
        },{
            'back_number':'24',
            'name':'오재원',
            'position':'2루수',
            'hand':'우타',
            'birth':'1985',
            'url':'https://spotvcdnendpoint.azureedge.net/spotv/player/simage/20190315/20190315143240740.png'
        },{
            'back_number':'13',
            'name':'허경민',
            'position':'3루수',
            'hand':'우타',
            'birth':'1990',
            'url':'https://spotvcdnendpoint.azureedge.net/spotv/player/simage/20190315/20190315143445148.png'
        }
    ]
    card.map((val) => {
        let card_temp ;
    })
})