<template>
    <div class="index-right">
        <div class="container">
             <div class="content" style="height: 340px;">
                 <div class="header">
                    <div class="head">
                        <i class="iconfont icon-adduser" style="font-size: 18px;">创作中心</i>
                        <span>草稿箱(2)</span>
                    </div>
                    <div class="icons">
                        <div class="item">
                            <i class="iconfont icon-file-copy"></i>
                            <p>回答问题</p>
                        </div>
                        <div class="item">
                            <i class="iconfont icon-video"></i>
                            <p>发视频</p>
                        </div>
                        <div class="item">
                            <i class="iconfont icon-file-word"></i>
                            <p>写文章</p>
                        </div>
                        <div class="item">
                            <i class="iconfont icon-bulb"></i>
                            <p>写想法</p>
                        </div>
                    </div>
                 </div>
                <div class="texts">
                    <div class="texts-content">
                        <div class="title">开启你的知乎创作之旅</div>
                        <div class="texts-text">发布首篇内容，开通创作中心 快来成为知乎创作者吧～</div>
                    </div>
                    <el-image src="../../public/vite.svg" />
                </div>
                <el-button type="primary" plain>
                    <el-icon><Plus /></el-icon>
                    开始创作
                </el-button>
            </div>
        </div>
    </div>
    
    <div class="index-right">
        <div class="container">
            <div class="content" style="height: 200px;">
                <div class="header">
                    <i class="iconfont icon-huangguan" style="font-size: 18px;">盐选作者平台</i>
                </div>
                <div class="texts">
                    <div class="texts-content">
                        <div class="title">写好故事,赚高收益！</div>
                        <div class="texts-text">已有60w+作者入驻！</div>
                    </div>
                    <el-image src="../../public/vite.svg" />
                </div>
                <el-button type="primary" plain>
                    去投稿
                    <el-icon><ArrowRightBold /></el-icon>
                </el-button>
            </div>
        </div>
    </div>

    <div class="index-right">
        <div class="container">
            <div class="content">
                <div class="header">
                    <i class="iconfont icon-adduser" style="font-size: 18px;">推荐关注</i>
                </div>
                <div class="care-content">
                        <div class="item">
                            <el-image src="../../public/vite.svg"/>
                            <div class="info">
                                规模不大
                                <span>搞笑博主</span>
                            </div>
                            <div class="interest">
                                <el-link :underline="false">
                                    <i class="iconfont icon-plus">
                                    关注
                                    </i>
                                </el-link>
                            </div>
                        </div>
                        <div class="item">
                            <el-image src="../../public/vite.svg"/>
                            <div class="info">
                                大为反感
                                <span>你可能感兴趣</span>
                            </div>
                            <div class="interest">
                                <el-link :underline="false">
                                    <i class="iconfont icon-plus">
                                    关注
                                    </i>
                                </el-link>
                            </div>
                        </div>
                        <div class="item">
                            <el-image src="../../public/vite.svg"/>
                            <div class="info">
                                fgagwa
                                <span>兴趣博主</span>
                            </div>
                            <div class="interest">
                                <el-link :underline="false">
                                    <i class="iconfont icon-plus">
                                    关注
                                    </i>
                                </el-link>
                            </div>
                        </div>
                        <div class="item">
                            <el-image src="../../public/vite.svg"/>
                            <div class="info">
                                哦哦哦明年经济法规
                                <span>你可能感兴adadsafasgag趣</span>
                            </div>
                            <div class="interest">
                                <el-link :underline="false">
                                    <i class="iconfont icon-plus">
                                    关注
                                    </i>
                                </el-link>
                            </div>
                        </div>
                  </div>
            </div>
        </div>
    </div>
    <div class="index-right">
        <div class="container">
            <div class="content">
                <div class="tools">
                    <div class="tool">
					    <i class="iconfont icon-rise">
						    <p>Live</p>
					    </i>
				    </div>
                    <div class="tool">
                        <i class="iconfont icon-read"> 
                            <p>书店</p>
                        </i>
                    </div>
                    <div class="tool">
                        <i class="iconfont icon-aim">
                            <p>圆桌</p>
                        </i>
                    </div>
                    <div class="tool">
                        <i class="iconfont icon-edit">
                            <p>专栏</p>
                        </i>
                    </div>
                    <div class="tool">
                        <i class="iconfont icon-propertysafety">
                            <p>付费咨询</p>
                        </i>
                    </div>
                    <div class="tool">
                        <i class="iconfont icon-google">
                            <p>百科</p>
                        </i>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="index-right">
        <div class="container">
            <div class="content">
                <div class="btns">
                    <div class="btn">
                        <el-badge :value="15" type="info" :offset="[120, 13]" style="display: block;">
                            <i class="iconfont icon-star">
                                我的收藏
                            </i>
                    </el-badge>
                    </div>
                    <div class="btn">
                        <el-badge :value="63" type="info" :offset="[80, 13]" style="display: block;">
                            <i class="iconfont icon-question-circle">
                                我关注的问题
                            </i>
                    </el-badge>
                    </div>
                    <div class="btn">
                        <i class="iconfont icon-switchuser">
                            我的邀请
                        </i>
                    </div>
                    <div class="btn">
                        <i class="iconfont icon-propertysafety">
                            我的余额
                        </i>
                    </div>
                    <div class="btn">
                        <i class="iconfont icon-redenvelope">
                            我的礼券
                        </i>
                    </div>
                    <div class="btn">
                        <i class="iconfont icon-warning-circle">
                            我的举报
                        </i>
                    </div>
                    <div class="btn">
                        <i class="iconfont icon-api">
                            违规诊断
                        </i>
                    </div>
                    <div class="btn">
                        <i class="iconfont icon-customerservice">
                            帮助与客服
                        </i>
                    </div>
                    <div class="btn">
                        <i class="iconfont icon-deploymentunit">
                            版权服务中心
                        </i>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { Plus,ArrowRightBold } from '@element-plus/icons-vue'
</script>
<style lang="less" scoped>
.index-right{
    margin: 0 0 10px 10px;
    .container{
        width: 280px;
        display: flex;
        background-color: white;
        flex-direction: column;
        .content{
            width: 280px;
            .header{
                .head{
                    margin: 10px 0;
                    font-size: 14px;
                    display: flex;
                    span{
                        cursor: pointer;
                        margin-left: 120px;
                    }
                }
            }
            .icons{
                margin: 30px 10px;
                display: flex;
                .item{
                    flex: 1;
                    cursor: pointer;
                    i{
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        border-radius: 50%;
                        height: 40px;
                        width: 40px;
                        font-size: 18px;
                    }
                    p{
                        font-size: 12px;
                        margin-top: 15px;
                    }
                }
                .item:nth-child(1) i{
                    color: #0066ff;
                    background-color:#e0ecff;
                }
                .item:nth-child(1) i:hover{
                    color: blue;
                }
                .item:nth-child(2) i{
                    color: #ffb959;
                    background-color: #fff2e1;
                }
                .item:nth-child(2) i:hover{
                    color: orange;
                }
                .item:nth-child(3) i{
                    color: #f4c807;
                    background-color: #fdf8e1;
                }
                .item:nth-child(3) i:hover{
                    color: lightyellow;
                }
                .item:nth-child(4) i{
                    color:#26bfbf;
                    background-color: #e5f7f7;
                }
                .item:nth-child(4) i:hover{
                    color: lightseagreen;
                }
            }
            .texts{
                margin: 10px 0;
                margin-left: 10px;
                margin-right: 10px;
                width: 240px;
                overflow: hidden;
                background-color: #ddd;
                padding: 10px;
                display: flex;
                height: 80px;
                border-radius: 10px;
                .texts-text{
                    color: lightslategray;
                    font-size: 12px;
                    flex-wrap: wrap;
                }
                .texts-content{
                    cursor: pointer;
					padding-bottom: 20px;
                }
            }
            .care-content{
                    .item{
						display: flex;
						position: relative;
						margin: 10px;
                        .el-image{
                            margin-right: 8px;
                            cursor: pointer;
                        }
						.info{
                            cursor: pointer;
							font-size: 12px;
							font-weight: 700;
							span{
                                cursor: default;
                                width: 146px;
								display: block;
								font-size: 12px;
								font-weight: 100;
                                text-overflow: ellipsis;
                                overflow: hidden;
                                word-break: break-all;
                                white-space: nowrap;
							}
						}
						.interest{
							position: absolute;
							right: 0;
                            margin-right: 10px;
						}
				    }
                }
                .tools{
				width: 260px;
				margin-right: 20px;
				display: grid;
                margin: 10px;
				grid-template-columns: repeat(3,1fr);
                    .tool{
                        cursor: pointer;
                        padding: 0;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        .iconfont{
                            font-size: 18px;
                            text-align: center;
                        }
					}
                    .tool:nth-child(1){
                        color: yellowgreen;
                    }
                    .tool:nth-child(2){
                        color: green;
                    }
                    .tool:nth-child(3){
                        color: lightskyblue;
                    }
                    .tool:nth-child(4){
                        color: lightsteelblue;
                    }
                    .tool:nth-child(5){
                        color: lightblue;
                    }
                    .tool:nth-child(6){
                        color: purple;
                    }
			}
            .btns{
                .btn{
                    cursor: pointer;
                    .iconfont{
                        margin: 10px;
                        font-size: 20px;
                        color: lightslategrey;
                    }
                }
                .btn:hover{
                    width: 270px;
                    background-color: #ddd;
                }
            }
            .el-button{
                margin: 10px;
                margin-top: 10px;
                padding: 20px;
                width: 260px;
            }
        }
    }
}
    
</style>