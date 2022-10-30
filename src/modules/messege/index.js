import { Module } from "@/core/module"
import "./index.css"
import { changeWord } from "./common/utils.js"


export class MessegeModule extends Module {
	constructor() {
		super('messege', 'Какой костюм надеть?')
	}

	getWorld() {
		return changeWord()
	}

	createModalHTML() {
		const modal = document.createElement('div')
		const text = document.createElement('p')
		modal.className = 'modal-wrap'
		modal.id = 'myModal'
		text.textContent = `Надень костюм "${this.getWorld()}"`
		text.className = 'text'
		modal.append(text)
		return modal
	}

	removeModal() {
		const modalWindow = document.querySelector('.modal-wrap')
		modalWindow.parentNode.removeChild(modalWindow)
	}
	trigger() {
		const modalWindow = document.querySelector('.modal-wrap')
		modalWindow && this.removeModal()
		document.body.appendChild(this.createModalHTML())
		setTimeout(() => this.removeModal(), 7000)
	}
}
