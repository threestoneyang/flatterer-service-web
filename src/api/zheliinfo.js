import request from '@/plugin/axios'

export function getZheliinfo () {
  return request({
    url: 'http://127.0.0.1:11200/flatterer-manage/tuwen/queryByRandomZheli',
    method: 'get'
  })
}
