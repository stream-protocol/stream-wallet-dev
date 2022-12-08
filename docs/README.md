---
title: Introduction
description: Stream is a non-custodial blockchain wallets for webpages that allow users to interact with blockchain applications.
footer:
  newsletter: false
aside: true
order: 1
---

# Stream wallet Documentation

## Introduction

Stream is a non-custodial blockchain wallets for webpages that allow users to interact with blockchain applications.

## Why Stream?

- Private keys are stored locally. This removes the friction and risk of webpages having to manage user private keys safely and securely.
- As the user's private key is not managed by the website, users do not have to worry about the level of security of the website. The user only has to trust the security guarantees of Stream, and freely interact with various web applications as they wish (and verify the contents of the transaction).
- Stream can easily connect to libraries such as CosmJS, simplifying the process of connecting webpages to blockchains.

## Sections
[Integrate with Stream](./api) describes how to integrate with Stream in the webpage.  

[Use with cosmjs](./api/cosmjs.md) describes how to use cosmjs with Stream.

[Use with secretjs](./api/secretjs.md) describes how to use secretjs with Stream if you need to use secret-wasm feature.
  
[Suggest chain](./api/suggest-chain.md) describes how to suggest the chain to Stream if the chain is not supported natively in Stream.
