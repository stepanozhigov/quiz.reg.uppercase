<template>
	<div>
		<nav class="nav" :class="{ mobil: step > 0 }">
			<div class="nav__wrapper">
				<div class="nav__items">
					<a href="https://reg.uppercase.kz/" class="nav__items_img">
						<img src="/img/logo.svg" alt="logo" class="" />
					</a>
					<div class="nav__items_contact">
						<a href="tel:+77051350000">+7 705 135 00 00</a>
						<span @click="callBack" v-html="$ml.get('callBack')" />
					</div>
				</div>
			</div>
		</nav>
		<section class="home" v-if="step == 0">
			<div class="home__wrapper">
				<div class="home__items">
					<div class="home__items_item">
						<h1 class="home_title" v-html="$ml.get('title')" />
						<p class="home_intro" v-html="$ml.get('subtitle')" />
					</div>
					<div class="home__items_item">
						<button
							class="btn btn_next home_btn"
							@click="step++"
							v-html="$ml.get('btn')"
						/>
						<a
							href="https://reg.uppercase.kz/"
							class="home_link"
							v-text="$ml.get('site_link')"
						/>
					</div>
				</div>
			</div>
		</section>
		<section class="question" v-if="step >= 1 && step != 6">
			<div class="question_header" v-if="step < 6">
				<div class="question__wrapper">
					<div class="question__items question_header__items">
						<span class="question_header_close close" @click="step = 0">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								viewBox="0 0 18 18"
							>
								<path
									fill="none"
									stroke="#898886"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-miterlimit="20"
									stroke-width="1.5"
									d="M1 1l16 16"
								/>
								<path
									fill="none"
									stroke="#898886"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-miterlimit="20"
									stroke-width="1.5"
									d="M17 1L1 17"
								/>
							</svg>
						</span>
						<div
							class="question_header_step"
							v-if="step == 1"
							v-text="$ml.with('1/3').get('header_step')"
						/>
						<div
							class="question_header_step"
							v-if="step == 2"
							v-text="$ml.with('2/3').get('header_step')"
						/>
						<div
							class="question_header_step"
							v-if="step == 3"
							v-text="$ml.with('3/3').get('header_step')"
						/>
						<div
							class="question_header_step"
							v-if="step == 4"
							v-text="$ml.get('header_thank')"
						/>
						<div
							class="question_header_step"
							v-if="step == 5"
							v-text="$ml.get('header_thank')"
						/>
						<div
							class="question_header_title"
							v-if="step == 1"
							v-html="$ml.get('header_title_1')"
						/>
						<div
							class="question_header_title"
							v-if="step == 2"
							v-html="$ml.get('header_title_2')"
						/>
						<div
							class="question_header_title"
							v-if="step == 3"
							v-html="$ml.get('header_title_3')"
						/>
						<div
							class="question_header_title"
							v-if="step == 4"
							v-html="$ml.get('header_title_4')"
						/>
						<div
							class="question_header_title"
							v-if="step == 5"
							v-html="$ml.get('header_title_4')"
						/>
					</div>
				</div>
			</div>
			<div class="question_content" v-if="step != 4">
				<div class="question__wrapper">
					<div class="question__items question_content__items" v-if="step < 5">
						<div class="question_content__list">
							<ul class="question__list" v-if="step == 1">
								<li>
									<label for="opt1-1" class="radio">
										<input
											type="radio"
											v-model="questions.quest_1"
											id="opt1-1"
											class="radio_input"
											value="ТОО"
										/>
										<span class="label"></span>
										<span v-text="$ml.get('opt1_1')" />
									</label>
								</li>
								<li>
									<label for="opt1-2" class="radio">
										<input
											type="radio"
											v-model="questions.quest_1"
											id="opt1-2"
											class="radio_input"
											value="Филиал или представительство"
										/>
										<span class="label"></span>
										<span v-text="$ml.get('opt1_2')" />
									</label>
								</li>
								<li>
									<label for="opt1-3" class="radio">
										<input
											type="radio"
											v-model="questions.quest_1"
											id="opt1-3"
											class="radio_input"
											value="Не знаю"
										/>
										<span class="label"></span>
										<span v-text="$ml.get('opt1_3')" />
									</label>
								</li>
							</ul>

							<ul class="question__list" v-if="step == 2">
								<li class="question__list_group">
									<p class="question__list_title" v-text="$ml.get('opt2_1')" />
									<label for="opt2-1-1" class="radio">
										<input
											type="radio"
											v-model="questions.quest_2_1"
											id="opt2-1-1"
											class="radio_input"
											value="Да"
										/>
										<span class="label"></span>
										<span v-text="$ml.get('yes')" />
									</label>
									<label for="opt2-1-2" class="radio">
										<input
											type="radio"
											v-model="questions.quest_2_1"
											id="opt2-1-2"
											class="radio_input"
											value="Нет"
										/>
										<span class="label"></span>
										<span v-text="$ml.get('no')" />
									</label>
								</li>
								<li class="question__list_group">
									<p class="question__list_title" v-text="$ml.get('opt2_2')" />
									<label for="opt2-2-1" class="radio">
										<input
											type="radio"
											v-model="questions.quest_2_2"
											id="opt2-2-1"
											class="radio_input"
											value="Да"
										/>
										<span class="label"></span>
										<span v-text="$ml.get('yes')" />
									</label>
									<label for="opt2-2-2" class="radio">
										<input
											type="radio"
											v-model="questions.quest_2_2"
											id="opt2-2-2"
											class="radio_input"
											value="Нет"
										/>
										<span class="label"></span>
										<span v-text="$ml.get('no')" />
									</label>
								</li>
								<li class="question__list_group">
									<p class="question__list_title" v-text="$ml.get('opt2_3')" />
									<label for="opt2-3-1" class="radio">
										<input
											type="radio"
											v-model="questions.quest_2_3"
											id="opt2-3-1"
											class="radio_input"
											value="Да"
										/>
										<span class="label"></span>
										<span v-text="$ml.get('yes')" />
									</label>
									<label for="opt2-3-2" class="radio">
										<input
											type="radio"
											v-model="questions.quest_2_3"
											id="opt2-3-2"
											class="radio_input"
											value="Нет"
										/>
										<span class="label"></span>
										<span v-text="$ml.get('no')" />
									</label>
								</li>
							</ul>

							<ul class="question__list" v-if="step == 3">
								<li>
									<label for="opt3-1" class="radio">
										<input
											type="radio"
											v-model="questions.quest_3"
											id="opt3-1"
											class="radio_input"
											value="В ближайшие дни"
										/>
										<span class="label"></span>
										<span v-text="$ml.get('opt3_1')" />
									</label>
								</li>
								<li>
									<label for="opt3-2" class="radio">
										<input
											type="radio"
											v-model="questions.quest_3"
											id="opt3-2"
											class="radio_input"
											value="В течении месяца"
										/>
										<span class="label"></span>
										<span v-text="$ml.get('opt3_2')" />
									</label>
								</li>
								<li>
									<label for="opt3-3" class="radio">
										<input
											type="radio"
											v-model="questions.quest_3"
											id="opt3-3"
											class="radio_input"
											value="Прицениваюсь"
										/>
										<span class="label"></span>
										<span v-text="$ml.get('opt3_3')" />
									</label>
								</li>
							</ul>
						</div>
						<div class="question_content__ctrl">
							<div class="btn__group">
								<button class="btn btn_prev" @click="step--">←</button>
								<button
									class="btn btn_next"
									@click="step++"
									v-text="$ml.get('next')"
								/>
							</div>
						</div>
					</div>

					<div class="question__items question_content__items" v-if="step == 5">
						<div class="question__final">
							<p class="question__final_text" v-html="$ml.get('final_text')" />
							<phone-mask-input
								v-model="questions.phone"
								autoDetectCountry
								showFlag
								wrapperClass="input_wrapper"
								inputClass="question__final_input input"
								flagClass="input_flag"
								@onValidate="onValidate"
							/>
							<div class="question__final_btn">
								<button
									class="btn btn_next"
									@click="submitQuiz"
									v-html="$ml.get('btn')"
								/>
								<p class="alarm" v-html="$ml.get('alarm')" />
							</div>
						</div>
					</div>
				</div>
			</div>

			<div
				class="gift"
				v-if="step == 4"
				:class="[$props.lang === 'en' ? 'en' : 'ru']"
			>
				<div class="question__wrapper">
					<div class="question__items gift__items">
						<div class="gift_bg">
							<div class="btn__group">
								<button class="btn btn_prev" @click="step--">←</button>
								<button
									class="btn btn_next"
									@click="step++"
									v-text="$ml.get('next')"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

		<section class="thanks" v-if="step == 6">
			<div class="thanks__wrapper">
				<p class="thanks_subtitle" v-text="$ml.get('thanks_subtitle')" />
				<p class="thanks_title" v-text="$ml.get('thanks_title')" />
				<a
					href="/uppercase.pdf"
					target="_blank"
					class="thanks_link"
					v-text="$ml.get('thanks_link')"
				/>
				<a
					href="https://reg.uppercase.kz/"
					class="btn btn_next thanks_btn"
					v-text="$ml.get('site_link')"
				/>
				<span class="thanks_img">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="48"
						height="64"
						viewBox="0 0 48 64"
					>
						<path
							fill="#13100d"
							d="M0 39.999l27.428 16 20.57-12v8L27.428 64 0 48zm13.714 0L27.439 32 27.437 40l-6.861 4zM0 7.999L27.428 24 47.998 12l.002 6.4V20L27.428 32 0 16zM13.713 0l20.572 12-6.858 4-13.712-8z"
						/>
					</svg>
				</span>
			</div>
		</section>

		<modal v-if="isCallBack" @close="callBack">
			<div v-if="!isCallBackSend" slot="content">
				<p class="modal_title" v-html="$ml.get('callBack')" />
				<p class="modal_intro" v-html="$ml.get('modal_intro')" />

				<phone-mask-input
					v-model="questions.phone"
					autoDetectCountry
					showFlag
					wrapperClass="input_wrapper"
					inputClass="modal_input input"
					flagClass="input_flag"
					@onValidate="onValidate"
				/>
				<button
					class="btn btn_next modal_btn"
					@click="submitCallBack"
					v-text="$ml.get('send')"
				/>
				<p class="alarm" v-html="$ml.get('alarm')" />
			</div>
			<div v-else slot="content">
				<p
					class="modal_title modal_title_send"
					v-html="$ml.get('title_send')"
				/>
				<a
					href="https://reg.uppercase.kz/"
					class="btn btn_next modal_btn"
					v-text="$ml.get('site_link')"
				/>
			</div>
		</modal>
	</div>
</template>
<script>
	import PhoneMaskInput from "vue-phone-mask-input";
	import axios from "axios";
	Vue.component("modal", require("../components/Modal.vue").default);

	export default {
		data: function () {
			return {
				step: 0,
				questions: {
					quest_1: "Не знаю",
					quest_2_1: "Нет",
					quest_2_2: "Нет",
					quest_2_3: "Нет",
					quest_3: "Прицениваюсь",
					phone: "",
				},
				isCallBack: false,
				isCallBackSend: false,
				isValid: false,
			};
		},
		props: {
			lang: {
				type: String,
				default: "ru",
			},
			utm: {
				type: Object,
			},
		},
		mounted() {
			this.$ml.change(this.$props.lang);
		},
		methods: {
			onValidate(e) {
				if (e.isValidByLibPhoneNumberJs) this.isValid = true;
				else this.isValid = false;
			},
			callBack() {
				this.isCallBack = !this.isCallBack;
			},
			submitQuiz(e) {
				e.preventDefault();

				if (this.isValid) {
					ga.getAll()[0].send("event", "quiz", "send");
					window.ym(62231704, "reachGoal", "quiz-form");

					axios
						.post("/leads", {
							phone: this.questions.phone,
							tag: "Квиз",
							utm: this.utm,
							text:
								"Форма регистрации юридического лица: " +
								this.questions.quest_1 +
								"\nУчредитель юридическое лицо? " +
								this.questions.quest_2_1 +
								"\nДиректор гражданин Казахстана? " +
								this.questions.quest_2_2 +
								"\nУчредитель резидент Казахстана? " +
								this.questions.quest_2_3 +
								"\nКогда планируете регистрацию компании? " +
								this.questions.quest_3,
						})
						.then((response) => {
							console.log(response),
								(this.step = 6),
								setTimeout(() => {
									window.location.href = "/";
								}, 4000);
						});
				}
			},
			submitCallBack(e) {
				e.preventDefault();

				if (this.isValid) {
					ga.getAll()[0].send("event", "forms", "send");
					window.ym(62231704, "reachGoal", "quiz-callback");

					axios
						.post("/leads", {
							utm: this.utm,
							phone: this.questions.phone,
							tag: "Обратный звонок",
						})
						.then((response) => {
							this.isCallBackSend = true;
						});
				}
			},
		},
		components: {
			PhoneMaskInput,
		},
	};
</script>