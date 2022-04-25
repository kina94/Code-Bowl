function solution(genres, plays) {
    var arr_init = []  // 초기 배열 정렬
    var gp_sum = {} // 장르별 총합 플레이 수
    var gp_sum_sorted = [] // 장르별 총합 플레이 수 정렬
    var genres_cnt = {} // 장르별 수록곡 수
    var genres_cnt_filter = [] // 2개 이하의 수록곡만 저장
    var answer= []

    for (var i = 0; i < genres.length; i++) {
        arr_init.push([genres[i], plays[i], i])
    }
    arr_init = arr_init.sort((a, b) => b[1] - a[1]) // 사용할 배열 정렬

    arr_init.map(key => {
        genres_cnt[key[0]] = (genres_cnt[key[0]] | 0) + 1
        if (genres_cnt[key[0]] <= 2) {
            genres_cnt_filter.push(key)
        }
    }) // 수록곡이 두 개 이상인 경우 플레이 횟수가 적은 수록곡 제외

    for (var i = 0; i < genres.length; i++) {
        gp_sum[genres[i]] = (gp_sum[genres[i]] | 0) + plays[i]
    }
    var gp_sum_sorted = Object.entries(gp_sum).sort((a, b) => b[1] - a[1]) // 총합 플레이 수 정렬

    for (var i = 0; i < gp_sum_sorted.length; i++) {
        for (var j = 0; j < genres_cnt_filter.length; j++) {
            if (genres_cnt_filter[j].includes(gp_sum_sorted[i][0])) {
                answer.push(genres_cnt_filter[j].slice(2))
            }
        }
    } // 장르와 인덱스를 모두 고려한 정렬

    answer=answer.flat()
    answer=new Set(answer)
    answer=[...answer]

    return answer;
}

var genres = ["classic", "pop", "classic", "pop", "classic", "classic"]
var plays =  [400, 600, 150, 2500, 500, 500]
solution(genres, plays)