import {
  Accordion,
  AccordionItem,
  Card,
  CardBody,
  CardFooter,
  Image,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
} from "@nextui-org/react";
import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";

const bgUrl = new URL(
  `../../assets/images/bg_musicMemories.jpg`,
  import.meta.url
).href;

const ImagesRender = ({ images }: { images: string[] }) => (
  <PhotoProvider>
    <div className="max-h-80 overflow-y-auto gap-y-2">
      {images.map((item) => {
        const src = new URL(
          `../../assets/images/guangyu/${item}.jpg`,
          import.meta.url
        ).href;

        return (
          <PhotoView key={item} src={src}>
            <Image
              loading="eager"
              alt={item}
              className="h-[140px] w-full object-cover my-2"
              key={item}
              src={src}
            />
          </PhotoView>
        );
      })}
    </div>
  </PhotoProvider>
);

const MusicMemories = () => {
  const [current, setCurrent] = React.useState<any>(null);
  const [audio, setAudio] = React.useState<any>(null);

  const list = [
    {
      title: "瞬",
      meaning: "相遇",
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
      meaning: "鼓励",
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
      meaning: "倾诉",
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
      meaning: "合唱",
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
      meaning: "听歌",
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
      title: "Record",
      time: "2023.12.25",
      meaning: "圣诞",
      content: (
        <React.Fragment>
          <p className="text-orange-300">"把美好的回忆都装起来。"</p>
          <p>祝呆宝圣诞快乐~</p>
        </React.Fragment>
      ),
      img: "dai",
      music: "dai",
    },
    {
      title: "这就是爱",
      meaning: "跨年",
      content: (
        <React.Fragment>
          <p className="text-blue-300">
            "新的一年了，阿蕉我还是最最最喜欢你！！"
          </p>
          <p>你说往年都没有特别留意跨年这件事，就这么普普通通的过去了。</p>
          <p>
            其实在我看来，跨年就是要和最重要最珍惜的那个人在一起，共同去迎接新一年的生活。
          </p>
          <p>其实前一天晚上，我就写好了那些想跟你说的话。</p>
          <p>有对于你我的感受，也有对于你我的期许。</p>
          <p>你认真的看了每一句话，也句句回应予我。</p>
          <p>在那个时刻，我觉得世间的美好幸福莫过于此。</p>
          <p>陪伴，是最长情的告白。</p>
          <p>我也最喜欢你喽!</p>
        </React.Fragment>
      ),
      img: "ai",
      music: "ai",
    },
    {
      title: "有我呢",
      meaning: "揭伤",
      content: (
        <React.Fragment>
          <p className="text-blue-300">
            "我知道人都有阴暗面，但是我不想告诉你我的阴暗面不是怕破坏什么印象啊什么的，我是怕你是知道了害怕，怕吓着你，我告诉你了，是因为我想你看到一个完整的我，爱笑的是我，爱哭的也是我。"
          </p>
          <p>你提起了你曾经抑郁的往事。</p>
          <p>在每个夜晚哭泣着想离去，甚至一个人走入冰冷的海。</p>
          <p>听着你娓娓道来，我触目惊心。</p>
          <p>虽然不能真的感同身受，但我知道那段日子真的很难熬。</p>
          <p>
            我没有害怕，更没有想转身离开，因为是你自己走出了黑暗，现在的你就完整的站在我的面前，那是多么鲜活而独特的生命。
          </p>
          <p>反而，我更想去用力的抱住你。</p>
          <p>“别怕，亲爱的，有我呢。”</p>
        </React.Fragment>
      ),
      img: "wo",
      music: "wo",
    },
    {
      title: "关于爱的定义",
      meaning: "隔阂",
      content: (
        <React.Fragment>
          <p className="text-blue-300">"我要的是道歉吗？"</p>
          <p className="text-blue-300">
            "我说我要转身了！！我要悄悄走了！！！你到底懂不懂啊！！"
          </p>
          <p className="text-blue-300">"我要的是你抱！！"</p>
          <p>我好像变得不那么懂你了。</p>
          <p>我想做些什么，但却是一错再错。</p>
          <p>没有哄好你，也没有在该挽留的时候留下。</p>
          <p>嗯。那天的我真的让你失望了。</p>
          <p>
            我好像沉溺于那个对我偏爱的你，而忽略了你也是一个拥有喜怒哀乐的完整的人。
          </p>
          <p>所以当你在电话那头哭泣，我当下大脑空白，手足无措。</p>
          <p>那一刻我真的很害怕失去你。</p>
          <p>但庆幸你还没有离开。</p>
          <p>从那之后，我开始反思自己的言行，开始习惯所有样子的你。</p>
          <p>
            你不需要变成我所希望的那个样子，真实的表达当下的感受，无需自责，也无需隐藏。
          </p>
          <p>我也不会再让你因为我而伤心难过了。</p>
        </React.Fragment>
      ),
      img: "guan",
      music: "guan",
    },
    {
      title: "Record",
      meaning: "生日",
      time: "2024.01.12",
      content: (
        <React.Fragment>
          <p className="text-blue-300">
            "生日快乐，呆宝，希望你能一直勇敢快乐下去。"
          </p>
          <p>祝呆宝生日快乐~</p>
        </React.Fragment>
      ),
      img: "birthday",
      music: "birthday",
    },
    {
      title: "Record",
      meaning: "玩雪",
      time: "2024.01.22",
      content: (
        <React.Fragment>
          <p className="text-orange-300">"随地大小堆。"</p>
          <p className="text-orange-300">"勇敢的人先享受世界。"</p>
          <p>是谁看到雪走不动道，玩到两只手红彤彤，还把大姨妈都玩跑了。</p>
          <p>别看了，就是你这个笨蛋。</p>
          <p>不过呀，我是真的能从字里行间里感受到你的兴奋和快乐。</p>
          <p>好像长大以后，就很少这么不计得失的玩耍了。</p>
          <p>从你身上仿佛又看到从前那个无忧无虑的小孩儿的影子。</p>
          <p>希望你能时常保持孩子的童真。</p>
          <p>偶尔快乐，经常偶尔。</p>
        </React.Fragment>
      ),
      img: "zui",
      music: "zui",
    },
    {
      title: "Record",
      meaning: "光遇",
      time: "🕯",
      content: (
        <React.Fragment>
          <p className="text-blue-300">"不是因为游戏好玩才玩。"</p>
          <p className="text-blue-300">"而是因为游戏里有你。"</p>
          <Accordion>
            <AccordionItem
              disableIndicatorAnimation
              key="1"
              aria-label="随地大小拍"
              title="随地大小拍"
              indicator="🕯"
            >
              <ImagesRender images={["sui1", "sui2", "sui3", "sui4", "sui5"]} />
            </AccordionItem>
            <AccordionItem
              disableIndicatorAnimation
              key="2"
              aria-label="谁家小屁孩"
              title="谁家小屁孩"
              indicator="🕯"
            >
              <ImagesRender
                images={["xiao1", "xiao2", "xiao3", "xiao4", "xiao5", "xiao6"]}
              />
            </AccordionItem>
            <AccordionItem
              disableIndicatorAnimation
              key="3"
              aria-label="一家人整整齐齐"
              title="一家人整整齐齐"
              indicator="🕯"
            >
              <div className="max-h-80 overflow-y-auto">
                <ImagesRender
                  images={[
                    "yi1",
                    "yi2",
                    "yi3",
                    "yi4",
                    "yi5",
                    "yi6",
                    "yi7",
                    "yi8",
                    "yi9",
                    "yi10",
                    "yi11",
                    "yi12",
                    "yi13",
                    "yi14",
                    "yi15",
                    "yi16",
                    "yi17",
                    "yi18",
                    "yi19",
                  ]}
                />
              </div>
            </AccordionItem>
          </Accordion>
        </React.Fragment>
      ),
      img: "guang",
      music: "guang",
    },
  ];

  React.useEffect(() => {
    if (audio) {
      audio.play();
    }
  }, [audio]);

  return (
    <>
      <div
        className="overflow-y-auto px-4 py-2 flex flex-wrap justify-between bg-no-repeat bg-cover bg-top"
        style={{ backgroundImage: `url(${bgUrl})` }}
      >
        {list.map((item, index) => (
          <Card
            style={{ width: "calc(50% - 0.5rem)" }}
            className="my-2"
            shadow="sm"
            key={index}
            isPressable
            onPress={() => {
              setAudio(
                new Audio(
                  new URL(
                    `../../assets/music/${item.music}.mp3`,
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
                className="w-full object-cover h-[140px]"
                src={
                  new URL(
                    `../../assets/images/${item.img}.jpg`,
                    import.meta.url
                  ).href
                }
              />
            </CardBody>
            <CardFooter className="h-10 text-small justify-between">
              <b>{item.title}</b>
              {item.time && <p className="text-default-500">{item.time}</p>}
            </CardFooter>
          </Card>
        ))}
      </div>
      <Modal
        isDismissable={false}
        size="full"
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
              <ModalBody className="overflow-y-auto">
                {current?.content}
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default MusicMemories;
