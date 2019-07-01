import Mock from 'mockjs'
import { getUserInfo } from './user'

Mock.mock(/\/getUserInfo/, getUserInfo)

export default Mock
