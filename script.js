'use strict'
const $ = (selector)=>{
	NodeList.prototype.map = function () {
		const r = [];
		this.forEach((e, i) => r.push(this[i]))
		return r
	}
const getElem = ()=> {
    if(typeof  selector === 'string'){
       let $el = document.querySelectorAll(selector)
       return $el.length === 1 ? $el[0] : $el.map().map(e=>$(e))
    }
    else{
        return selector
    }
}
	const parseStyles = (stylesObject)=>{
		return Object.keys(stylesObject).map(style=>{
			return `${style}:${stylesObject[style]}`
		}).join(';')
	}
    const $el = getElem()


    return {

        on(event,fn){
            $el.addEventListener(event,fn.bind(this))
    },
        style(s,v=''){
            if(v){
                $el.style[s] = v;
            }
            else {
                return $el.style[s]
            }
        },

        // confirmStyles(obj){
        // 	const newStyles= Object.keys(obj)
        // 	const styles = ''
        // 	Object.keys(...$el.style).forEach(s=>{
        // 		if(newStyles.includes)
        // 	})
        // 	$el.style = parsed

       

        forEach(fn){

            $el.forEach(fn)
        },
        val(v='') {
            if (v) {
                $el.value = v
            }
            return $el.value
        },
        html(html){
            if(html) {
                $el.innerHTML = html
            }
            return $el.outerHTML
        },
        append(el){
        $el.appendChild(el.$el)
        return this
        },
        show(){
        	this.style('display', 'block')
        },
        hide(){
        	this.style('display', 'none')
        },

       $el

    }

}
$.create = (tagName,entries='',properties={})=>{
	const el = document.createElement(tagName)
	el.innerHTML = entries
	Object.keys(properties).forEach(attr=>{
		el.setAttribute(attr, properties[attr])
	})
	return $(el)

}



const control1 = $.create('button','left',{class:'work', id:'control1'})

const control2 = $.create('button','right',{class:'work', id:'control2' })

const control3 = $.create('button','down',{class:'work', id:'control3' })
const control4 = $.create('button','up',{class:'work', id:'control4' })



$('.controls').append(control1)
$('.controls').append(control2)

let i = 0;

control1.on('click', function(){
	

	$('.moving').style('left',`${i+=30}px`)

})
control2.on('click', function(){
	$('.moving').style('left',`${i-=30}px`)
})

//Уверен, что ты зайдешь сюда и испугаешься такого большого количетва кода, на самом деле это все можно было сделать за 5-7 строчек кода, я просто тестировал здесь кое-что :)))