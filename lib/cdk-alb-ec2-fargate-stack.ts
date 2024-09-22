import * as cdk from "aws-cdk-lib";
import * as ec2 from "aws-cdk-lib/aws-ec2";
import { Construct } from "constructs";
import { AppParameter } from "../env/parameter";

export class CdkAlbEc2FargateStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props: cdk.StackProps & { config: AppParameter }) {
    super(scope, id, props);
    // console.log(props.config.appName);
    new ec2.Vpc(this, "vpc", {});

    // new ec2.Vpc(this, "vpc", {
    //   vpcName: "cdk-alb-ec2-fargate-vpc",
    //   createInternetGateway: true,
    //   maxAzs: 3,
    //   ipAddresses: ec2.IpAddresses.cidr("10.0.0.0/16"),
    //   subnetConfiguration: [
    //     {
    //       cidrMask: 24,
    //       name: "cdk-alb-ec2-fargate-subnet-public",
    //       subnetType: ec2.SubnetType.PUBLIC,
    //     },
    //     {
    //       cidrMask: 24,
    //       name: "cdk-alb-ec2-fargate-subnet-private",
    //       subnetType: ec2.SubnetType.PRIVATE_ISOLATED,
    //     },
    //   ],
    // });
  }
}
