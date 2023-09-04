<template>
    <div class="col-12">
        <h1>Desenvolvedor <br>
            <span class="typed-text">{{ typeValue }}</span>
            <span class="cursor" :class="{'typing': typeStatus}">&nbsp;</span>
        </h1>
    </div>     
</template>
  <script>
    export default {
      data: () => {
        return {
          typeValue: '',
          typeStatus: false,
          typeArray: ['Full-stack Júnior', 'PHP e Laravel', 'Inertia.js', 'Vue.js'],
          typingSpeed: 200,
          erasingSpeed: 100,
          newTextDelay: 2000,
          typeArrayIndex: 0,
          charIndex: 0
        }
      },
      methods: {
        typeText() {
          if(this.charIndex < this.typeArray[this.typeArrayIndex].length) {
            if(!this.typeStatus)
              this.typeStatus = true;
  
            this.typeValue += this.typeArray[this.typeArrayIndex].charAt(this.charIndex);
            this.charIndex += 1;
  
            setTimeout(this.typeText, this.typingSpeed);
          }
          else {
            this.typeStatus = false;
            setTimeout(this.eraseText, this.newTextDelay);
          }
        },
        eraseText() {
          if(this.charIndex > 0) {
            if(!this.typeStatus)
              this.typeStatus = true;
  
            this.typeValue = this.typeArray[this.typeArrayIndex].substring(0, this.charIndex - 1);
            this.charIndex -= 1;
            setTimeout(this.eraseText, this.erasingSpeed);
          }
          else {
            this.typeStatus = false;
            this.typeArrayIndex += 1;
            if(this.typeArrayIndex >= this.typeArray.length)
              this.typeArrayIndex = 0;
  
            setTimeout(this.typeText, this.typingSpeed + 1000);
          }
        }
      },
      created() {
        setTimeout(this.typeText, this.newTextDelay + 200);
      }
    }
  </script>
  
  <style lang="scss" scoped>
  
    h1 {
        font-family: 'Titillium Web', sans-serif;
        font-weight:800;
        font-size: 4.4rem;
        text-shadow: 0px 0px 13px #000000;
  
      span.typed-text {
        color: #fda543;
        
        transition: all 0.6s cubic-bezier(0.23, 1, 0.320, 1)
      }
  
      span.cursor {
        display: inline-block;
        margin-left: 3px;
        width: 4px;
        background-color: #fff;
        animation: cursorBlink 1s infinite;
      }
  
      span.cursor.typing {
        animation: none;
      }
    }
  
    @keyframes cursorBlink {
      49% { background-color: #fff; }
      50% { background-color: transparent; }
      99% { background-color: transparent; }
    }
  </style>