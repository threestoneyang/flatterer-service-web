import request from '@/plugin/axios'

export function getFuckinfo () {
  return request({
    url: 'http://127.0.0.1:11200/flatterer-manage/tuwen/queryByRandomFuck',
    method: 'get'
  })
}
