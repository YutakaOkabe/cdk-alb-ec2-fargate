#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "aws-cdk-lib";
import { CdkAlbEc2FargateStack } from "../lib/cdk-alb-ec2-fargate-stack";
import { parameters as devParameters } from "../env/dev";
import { parameters as prdParameters } from "../env/prd";

const app = new cdk.App();

// 環境名設定
const envName = app.node.tryGetContext("env");
if (envName == undefined)
  throw new Error(
    `Please specify environment with context option. ex) cdk deploy -c env=dev`
  );
const properties = getProperties(envName);

new CdkAlbEc2FargateStack(app, `${properties.envName}-${properties.appName}`, {
  config: properties,
  env: { region: "ap-northeast-1" },
});

function getProperties(envName: string) {
  switch (envName) {
    case "dev":
      return devParameters;
    case "prd":
      return prdParameters;
    default:
      throw new Error("Invalid environment.");
  }
}
