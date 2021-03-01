<template>
    <div
            id="bqr__modal-container"
            v-if="isVisible"
            :class="{
            'bqr__modal-container': true,
            [getBgVisibleClass]: true,
            [getPositionClass]: true
        }"
    >
        <div
                ref="modalWrapper"
                :class="{
                'bqr__modal-wrapper': true,
                [className]: true
            }"
        >
            <slot></slot>
        </div>
    </div>
</template>

<script>

    import ModalSettingsMixin from "./mixins/ModalSettingsMixin";
    import ModalContainerPropsMixin from "./mixins/ModalContainerPropsMixin";

    export default {
        mixins: [
            ModalSettingsMixin,
            ModalContainerPropsMixin
        ],
        watch: {
            isVisible: {
                handler: function(val) {
                    this.isModalVisible = val;
                },
                immediate: true
            },

            isModalVisible(val) {
                this.handleDimensions();
                this.handleAutoHide(val);
                this.handleScrollBlocked(val);
            }
        },

        data() {
            return {
                bodyOverflow: null, // keeps css overflow value if scrollBlocked is active
                isModalVisible: false // true: display component in the DOM
            }
        },

        methods: {
            /**
             * emit the close event
             */
            closeModal() {
                this.$emit('close');
            },

            /**
             * @param {boolean} val
             */
            handleAutoHide(val) {
                if (val && (this.autoHide > 0)) {
                    setTimeout(() => {
                        this.closeModal();
                    }, this.autoHide);
                }
            },

            /**
             * @param {boolean} val
             */
            handleScrollBlocked(val) {
                if (this.isScrollBlocked) {
                    if (val) {
                        this.bodyOverflow = document.body.style.overflow;
                        document.body.style.overflow = 'hidden';
                    }
                    else if (!val) {
                        if (this.bodyOverflow) document.body.style.overflow = this.bodyOverflow;
                    }
                }
            },

            handleDimensions() {
                this.$nextTick(() => {
                    if (!this.$refs.modalWrapper) return;

                    if (this.size.width > 0) {
                        this.$refs.modalWrapper.style.width = `${this.size.width}px`;
                    }

                    if (this.size.height > 0) {
                        this.$refs.modalWrapper.style.height = `${this.size.height}px`;
                    }

                    if (this.size.minWidth > 0) {
                        this.$refs.modalWrapper.style.minWidth = `${this.size.minWidth}px`;
                    }

                    if (this.size.minHeight > 0) {
                        this.$refs.modalWrapper.style.minHeight = `${this.size.minHeight}px`;
                    }

                    if (this.size.maxWidth > 0) {
                        this.$refs.modalWrapper.style.maxWidth = `${this.size.maxWidth}px`;
                    }

                    if (this.size.maxHeight > 0) {
                        this.$refs.modalWrapper.style.maxHeight = `${this.size.maxHeight}px`;
                    }
                });
            },
        },

        computed: {
            /**
             *
             * @return {string}
             */
            getPositionClass() {
                return this.position === '' ?
                    'center' :
                    this.position;
            },

            /**
             * @return {string}
             */
            getBgVisibleClass() {
                return (
                    this.isBgVisible ?
                        'bg-visible' :
                        'bg-hidden'
                );
            }
        },
    }

</script>

<style lang="scss">

    .bqr__modal-container {
        position: fixed;
        z-index: 99999;

        .bqr__modal-wrapper {
            position: relative;
            border: 1px solid #eee;
            border-radius: 4px;
            box-shadow: 2px 2px 8px #aaa;
            background-color: #fff;
        }

        &.bg-visible {
            display: flex;
            top: 0; bottom: 0;
            left: 0; right: 0;

            background-color: rgba(0,0,0,0.4);

            &.center {
                justify-content: center;
                align-items: center;
            }

            &.center-top {
                justify-content: center;
                align-items: flex-start;
                .bqr__modal-wrapper {
                    transform: translateY(40px);
                }
            }

            &.center-bottom {
                justify-content: center;
                align-items: flex-end;

                .bqr__modal-wrapper {
                    transform: translateY(-40px);
                }
            }

            &.left-top {
                align-items: flex-start;

                .bqr__modal-wrapper {
                    max-width: calc(100vw - 16px);
                    transform: translate(16px, 16px);
                }
            }

            &.left-bottom {
                align-items: flex-end;

                .bqr__modal-wrapper {
                    max-width: calc(100vw - 16px);
                    transform: translate(16px, -16px);
                }
            }

            &.right-top {
                align-items: flex-start;
                flex-direction: row-reverse;

                .bqr__modal-wrapper {
                    max-width: calc(100vw - 16px);
                    transform: translate(-16px, 16px);
                }
            }

            &.right-bottom {
                align-items: flex-end;
                flex-direction: row-reverse;

                .bqr__modal-wrapper {
                    max-width: calc(100vw - 16px);
                    transform: translate(-16px, -16px);
                }
            }

            &.right-stretch {
                flex-direction: row-reverse;

                .bqr__modal-wrapper {
                    height: 100vh;
                }
            }

            &.left-stretch {

                .bqr__modal-wrapper {
                    height: 100vh;
                }
            }

            &.top-stretch {
                align-items: flex-start;
                .bqr__modal-wrapper {
                    width: 100vw;
                }
            }

            &.bottom-stretch {
                align-items: flex-end;
                .bqr__modal-wrapper {
                    width: 100vw;
                }
            }
        }

        &.bg-hidden {
            display: inline-block;

            &.center {
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
            }

            &.center-top {
                top: 40px;
                left: 50%;
                transform: translateX(-50%);
            }

            &.center-bottom {
                bottom: 40px;
                left: 50%;
                transform: translateX(-50%);
            }

            &.left-top {
                left: 16px;
                top: 16px;
            }

            &.left-bottom {
                left: 16px;
                bottom: 16px;
            }

            &.right-top {
                right: 16px;
                top: 16px;
            }

            &.right-bottom {
                right: 16px;
                bottom: 16px;
            }

            &.right-stretch {
                top: 0;
                right: 0;
                .bqr__modal-wrapper {
                    height: 100vh;
                }
            }

            &.left-stretch {
                top: 0;
                left: 0;
                .bqr__modal-wrapper {
                    height: 100vh;
                }
            }

            &.top-stretch {
                top: 0;
                left: 0;
                .bqr__modal-wrapper {
                    width: 100vw;
                }
            }

            &.bottom-stretch {
                bottom: 0;
                left: 0;
                .bqr__modal-wrapper {
                    width: 100vw;
                }
            }
        }
    }

</style>