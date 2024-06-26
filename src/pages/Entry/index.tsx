import {
  Avatar,
  Button,
  Input,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@nextui-org/react";
import React from "react";

const bgUrl = new URL(`../../assets/images/bg_entry.jpg`, import.meta.url).href;
const sheepAvatarUrl = new URL(
  `../../assets/images/avatar_sheep.jpg`,
  import.meta.url
).href;
const wolfAvatarUrl = new URL(
  `../../assets/images/avatar_wolf.jpg`,
  import.meta.url
).href;

const Entry = ({ onAdmitted }: { onAdmitted: any }) => {
  const [errorMessage, setErrorMessage] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <div
      className="flex flex-col items-center justify-center h-screen bg-no-repeat bg-cover bg-top"
      style={{ backgroundImage: `url(${bgUrl})` }}
    >
      <div className="flex gap-4 justify-center">
        <Popover placement="top">
          <PopoverTrigger>
            <Avatar size="lg" src={sheepAvatarUrl} />
          </PopoverTrigger>
          <PopoverContent>❤</PopoverContent>
        </Popover>
        <Popover placement="top">
          <PopoverTrigger>
            <Avatar size="lg" src={wolfAvatarUrl} />
          </PopoverTrigger>
          <PopoverContent>❤</PopoverContent>
        </Popover>
      </div>
      <div className="mt-4 mb-8 h-12">
        <Input
          size="lg"
          type="password"
          placeholder="请输入密码"
          labelPlacement="outside"
          value={password}
          isInvalid={!!errorMessage}
          errorMessage={errorMessage}
          onChange={(e) => {
            setPassword(e.target.value);
            setErrorMessage("");
          }}
          onClear={() => {
            setPassword("");
            setErrorMessage("");
          }}
        />
      </div>
      <div className="flex gap-6">
        <Popover placement="bottom">
          <PopoverTrigger>
            <Button isIconOnly size="lg" aria-label="Tip">
              💡
            </Button>
          </PopoverTrigger>
          <PopoverContent>密码是第一天认识的日子哦</PopoverContent>
        </Popover>
        <Button
          isIconOnly
          size="lg"
          color="default"
          aria-label="Enter"
          onPress={() => {
            if (password.trim()) {
              if (password.trim() === "20231129") {
                setErrorMessage("");
                onAdmitted(true);
              } else {
                setErrorMessage("密码错误");
              }
            } else {
              setErrorMessage("密码不能为空");
            }
          }}
        >
          👉
        </Button>
      </div>
    </div>
  );
};

export default Entry;
