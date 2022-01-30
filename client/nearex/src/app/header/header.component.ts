import { Component, OnInit } from '@angular/core';
import "regenerator-runtime/runtime";
// import { connect, keyStores, utils } from "near-api-js"

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  public nearConfig = {
    networkId: 'testnet',
    nodeUrl: "https://rpc.testnet.near.org",
    walletUrl: 'https://wallet.testnet.near.org',
    helperUrl: 'https://helper.testnet.near.org',
    explorerUrl: 'https://explorer.testnet.near.org',
    indexerUrl: 'https://dev-indexer.ref-finance.com',
    sodakiApiUrl: 'https://sodaki.com/api',
    contractName: "nearex1.testnet",
    headers: {}
  }

  constructor() { }

  async ngOnInit(): Promise<void> {
  
  }

  async connectWallet(){

    // const near = await connect(this.nearConfig);
    // const account = await near.account("nearex1.testnet");
    // console.log(account)
  }
}
