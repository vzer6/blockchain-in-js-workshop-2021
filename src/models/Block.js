import sha256 from 'crypto-js/sha256.js'

export const DIFFICULTY = 2

class Block {
    // 1. 完成构造函数及其参数

    constructor(blockchain, previousHash, index, hash) {
        this.blockchain = blockchain;
        this.previousHash = previousHash
        this.height = index
        this.hash = hash
    }
    /**
     * 
     * @returns 验证区块是否合法
     *
     */
    isValid() {
        const str="0".repeat(DIFFICULTY)
        return (this.nonce + "").startsWith(str)
    }

    setNonce(nonce) {
            this.nonce = nonce
        }
        /**
         * 
         * @returns 该区块的前一个区块
         */
    getPreviousBlock() {
        return this.blockchain.blocks[this.previousHash]
    }

}

export default Block