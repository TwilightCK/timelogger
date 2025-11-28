# FAssets Settings Reader

## **Contract Address**
`0xda3638C5dfa481DB0851da92358bfDb648037911`  
https://coston2-explorer.flare.network/address/0xda3638C5dfa481DB0851da92358bfDb648037911
<img width="1920" height="1200" alt="image" src="https://github.com/user-attachments/assets/90cc73eb-89af-4de8-b69c-94a61b94cc98" />


---

## **Project Description**
FAssets Settings Reader is a lightweight, developer-friendly interface that interacts with the Flare Network’s AssetManager contract through the official Contract Registry.  
Its purpose is to fetch and display core configuration parameters that define how FAssets operate on-chain—specifically the **lot size** (minimum tradeable amount in AMG units) and **asset decimals**.

This project provides an easy-to-understand example of integrating Flare smart contracts with a modern frontend using wagmi + viem, while keeping wallet-gating and loading/error feedback intact.

---

## **Features**
- 🔍 **Reads on-chain FAssets parameters** using the `getLotSize()` function  
- 🔗 **Direct interaction with Flare’s Contract Registry and AssetManager**  
- 🔐 **Wallet-gated UI** to ensure secure access  
- ⚡ **Live data refresh** using wagmi’s `useReadContract()`  
- 🧩 **Beginner-friendly TypeScript + React code**  
- 📱 **Clean and simple UI** for displaying values  
- 🛠️ **Error handling & loading indicators** for a smooth UX  
- 🔄 **Refetch support** to keep values up to date  

---

## **How It Solves**
The Flare ecosystem defines several operational parameters for FAssets, such as the lot size and decimal precision.  
These values are essential for:

- Off-chain services  
- Wallets  
- DApps performing conversions  
- Price and settlement calculations  
- User-facing dashboards  
- Cross-chain applications interfacing with FAssets  

However, accessing these parameters normally requires deeper familiarity with the AssetManager architecture.

This project simplifies that process by:

### ✅ Providing a minimal Solidity contract  
Your contract serves as a dedicated, beginner-friendly reader that exposes `getLotSize()`—no complex logic or heavy dependencies.

### ✅ Offering an accessible React + wagmi frontend  
Developers can immediately test and verify network data without writing additional scripts.

### ✅ Making on-chain FAssets configuration understandable  
By abstracting the AssetManager interactions, developers can focus on using the data rather than decoding where it comes from.

---

This repository is ideal for anyone learning Flare development, integrating FAssets, or building cross-chain DApps that depend on accurate network parameters.
