"use client";

import React from "react";
import Button from "./Button";
import Icon from "./Icon";

export default function ButtonTestFiled() {
  return (
    <div className=" pt-4 flex flex-col items-center justify-center">
      <div className="w-5/6">
        <h1 className="text-3xl font-bold">Button</h1>
        <div className="mt-2">
          <h2 className="my-2 text-xl font-bold">Theme</h2>
          <Button className="mr-2">default</Button>
          <Button theme="rounded">rounded</Button>
        </div>
        <div className="mt-2 ">
          <h2 className="my-2 text-xl font-bold">State</h2>
          <Button disabled>disabled</Button>
        </div>
        <div className="mt-2">
          <h2 className="my-2 text-xl font-bold">color</h2>
          <Button className="mr-2">default</Button>
          <Button className="mr-2" color="indigo">
            indigo
          </Button>
          <Button className="mr-2" color="slate">
            slate
          </Button>
          <Button className="mr-2" color="danger">
            danger
          </Button>
          <Button color="success">success</Button>
        </div>
        <div className="mt-2">
          <h2 className="my-2 text-xl font-bold">size</h2>
          <Button className="mr-2" size="lg">
            large
          </Button>
          <Button className="mr-2">default</Button>
          <Button className="mr-2" size="sm">
            sm
          </Button>
          <Button size="xs">xs</Button>
        </div>
        <div className="mt-2">
          <h2 className="my-2 text-xl font-bold">Icon & Icon with Button</h2>
          <Button className="mr-2">
            <Icon icon="PENCIL" />
          </Button>
          <Button className="mr-2">
            <Icon icon="TRASH" />
          </Button>
          <Button className="mr-2">
            <Icon icon="PENCIL" />
            <span className="ml-2">check</span>
          </Button>
          <Button>
            <Icon icon="TRASH" />
            <span className="ml-2">Edit Content</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
