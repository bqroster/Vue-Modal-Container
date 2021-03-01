export default {
    props: {
        isVisible: {
            type: Boolean,
            default: false
        },

        /**
         * Position OPTIONS:
         * center
         * center-top
         * center-bottom
         * right-stretch
         * left-stretch
         * top-stretch
         * bottom-stretch
         * left-bottom
         * left-top
         * right-bottom
         * right-top
         */
        position: {
            type: String,
            default: 'center'
        },

        /**
         * 0 means that the width
         * will be set by the child content
         */
        size: {
            type: Object,
            default: () => {
                return {
                    minWidth: 0,
                    width: 0,
                    maxWidth: 0,
                    minHeight: 0,
                    height: 0,
                    maxHeight: 0
                }
            }
        },

        className: {
            type: String,
            default: ''
        },

        autoHide: {
            type: Number,
            default: 0
        }
    }
}