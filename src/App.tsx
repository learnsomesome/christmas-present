import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
} from "@nextui-org/react";
import React, { useEffect, useState } from "react";

export default function App() {
  const [current, setCurrent] = useState<any>(null);
  const [audio, setAudio] = useState<any>(null);

  const list = [
    {
      title: "瞬",
      meaning: "第一次相遇",
      content: (
        <React.Fragment>
          <p className="text-blue-300">
            "我都要被相片纸逼死了, 前面那段rap我学了一百遍！！"
          </p>
          <p>你羞涩的拍下的相片纸📸。</p>
          <p>像是被命运牵引般相遇，从这之后，我们的生命中都有了对方。</p>
          <p>
            真没想到你会这么努力练习一首歌，但从另一个角度看其实也挺可爱。对，从这儿开始我就觉得你可爱了。
          </p>
          <p>
            不知道为什么突然间打开了话匣子，我们从音乐聊到美食，又从美食聊到生活。
          </p>
          <p>
            你给我分享相册里的风景，我还记得第一个是路灯下的漫天白雪，这一刻我看到了你眼里的世界。
          </p>
          <p>但你好像得了和我一样的病。</p>
          <p>(emo)</p>
        </React.Fragment>
      ),
      img: "shun",
      music: "shun",
    },
    {
      title: "绽放",
      meaning: "第一次鼓励",
      content: (
        <React.Fragment>
          <p className="text-blue-300">
            "为啥觉得别人的出现是救赎啊，不能理解为因为花开了所以蝴蝶才来的嘛。"
          </p>
          <p>我就是这么矛盾的一个人。</p>
          <p>不满足于当下，却又害怕前方未知的路。</p>
          <p>
            我是太在意外界了，我舍不得脱下看似光鲜亮丽的外衣，去赌我未知的未来。
          </p>
          <p>
            可你那天的那些话，好像真的扒开了我的外衣，让我的内心确定知道该怎么做。
          </p>
          <p>"人生是用来体验的。"</p>
          <p>"选择什么都是对的，感受当下顺应自己的心就是最好的。"</p>
          <p>我觉得做出这个决定以后，我就已经赢一半了。</p>
        </React.Fragment>
      ),
      img: "zhan",
      music: "zhan",
    },
    {
      title: "想你时风起",
      meaning: "第一次倾诉",
      content: (
        <React.Fragment>
          <p className="text-blue-300">
            "反而更希望身边的人过得好，好像我心里会跟着好受些。"
          </p>
          <p>很意外也很幸运，你愿意跟我分享你的过去。</p>
          <p>
            我才发现，原来你这么勇敢，但好像又没有人懂你的勇敢背负了些什么。
          </p>
          <p>你在身边筑起了高墙，设下了一步步谜题，等一个人拨开迷雾找到你。</p>
          <p>好像就是从那一刻起，我知道自己就是那束光。</p>
          <p>那个晚上你哭的很伤心，我开始怀疑自己是不是应该揭下你的面具。</p>
          <p>但我想明白了，这就是我们认识的意义。</p>
          <p>我们之间不必伪装，因为我们就是我们。</p>
        </React.Fragment>
      ),
      img: "xiang",
      music: "xiang",
    },
    {
      title: "永不失联的爱",
      meaning: "第一次合唱",
      content: (
        <React.Fragment>
          <p className="text-blue-300">"原调拿下了！"</p>
          <p>
            那时候的你好像真的有些小心翼翼。其实在我听来你的声音一直都很好听。
          </p>
          <p>
            听到你说录歌的时候去想难过的事情是为了唱出这首歌的情绪，我觉得你真的很认真的对待这次合唱，毕竟你说是你第一次合唱。
          </p>
          <p>(不过当下我是觉得你好可爱哈哈。)</p>
          <p>所以，我也得好好对待才是，不能让你失望啦。</p>
          <p>还好结果令人满意，至于唱的甜不甜 emm。</p>
          <p>(反正我觉得挺甜。)</p>
        </React.Fragment>
      ),
      img: "yong",
      music: "yong",
    },
    {
      title: "触碰不到的你",
      meaning: "第一次听歌",
      content: (
        <React.Fragment>
          <p className="text-blue-300">"触碰不到的你 触动了我。"</p>
          <p>我时常会幻想，我们真正见面的那天会是什么样呢。</p>
          <p>(我想冲上去给你一个大大的拥抱！)</p>
          <p>你是不是已经不再为生活的一地鸡毛而烦恼。</p>
          <p>我是不是得到我想得到的未来了呢。</p>
          <p>不论什么时候想到你，我都觉得自己很幸运，也很幸福。</p>
          <p>第一次收到小蛋糕，第一次收到花。</p>
          <p>你说这没什么，但我真的会开心很久，也会被温暖很久。</p>
          <p>你真的是很特别的存在。</p>
          <p>
            "遇见你真的是我最最最幸福的事，真的很奇怪，对你我能毫无保留的表达我当下的所有情感，一点都不矫情。"
          </p>
          <p>
            "不知道从什么时候开始，我习惯了和你的交流方式，变成你口中的小懒，期待着每天听到你的声音。"
          </p>
          <p>
            "我没有感到压力，自动那次通电话我们敞开心扉，我就明白了我在你身边的意义，我也很开心看到你在慢慢变好。"
          </p>
          <p>"不管以后怎么样，我的心里永远都会给你留一个位置。"</p>
          <p>"我喜欢你！！！"</p>
        </React.Fragment>
      ),
      img: "chu",
      music: "chu",
    },
    {
      title: "🎄",
      meaning: "第一次圣诞",
      content: (
        <React.Fragment>
          <p className="text-blue-300">"把美好的回忆都装起来。"</p>
          <p>祝呆呆圣诞快乐~</p>
        </React.Fragment>
      ),
      img: "dai",
      music: "dai",
    },
  ];

  useEffect(() => {
    if (audio) {
      audio.play();
    }
  }, [audio]);

  return (
    <>
      <div className="h-screen overflow-y-auto p-2 gap-2 grid grid-cols-2 sm:grid-cols-4 bg-slate-600">
        {list.map((item, index) => (
          <Card
            shadow="sm"
            key={index}
            isPressable
            onPress={() => {
              setAudio(
                new Audio(
                  new URL(
                    `./assets/music/${item.music}.mp3`,
                    import.meta.url
                  ).href
                )
              );
              setCurrent(item);
            }}
          >
            <CardBody className="overflow-visible p-0">
              <Image
                shadow="sm"
                radius="lg"
                width="100%"
                alt={item.title}
                className="w-full object-cover h-[170px]"
                src={
                  new URL(`./assets/images/${item.img}.jpg`, import.meta.url)
                    .href
                }
              />
            </CardBody>
            <CardFooter className="h-10 text-small justify-between">
              <b>{item.title}</b>
            </CardFooter>
          </Card>
        ))}
      </div>
      <Modal
        isOpen={!!current}
        placement="center"
        onOpenChange={(isOpen) => {
          if (!isOpen) {
            setAudio(() => {
              audio.pause();

              return null;
            });
            setCurrent(null);
          }
        }}
      >
        <ModalContent>
          {() => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                {current?.meaning}
              </ModalHeader>
              <ModalBody className="max-h-80 overflow-y-auto">
                {current?.content}
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
