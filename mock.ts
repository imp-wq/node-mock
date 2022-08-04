import Mock from 'mockjs'

const { mock } = Mock

const data = mock({
    'list|10': [{
        'name': '@cname()',
        'code|000000-999999': 1111111,
        'position:': '@county()',
        'email': '@email(qq.com)',
        'title': 'ctitle()',
        'word': 'csentence()',
        'comment': 'cparagraph()'
    }]
})

console.log(data)