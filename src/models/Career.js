import { models, model, Schema } from 'mongoose'

const careerSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
    },
    salary: {
        type: Number,
    },
    semesters: [
        {
            number: {
                type: String,
                required: true
            },
            subjects: [
                {
                    name: {
                        type: String,
                        required: true
                    },
                    duration: {
                        type: Number,
                        required: true
                    },
                    califications: [
                        {
                            name: {
                                type: String,
                            },
                            value: {
                                type: Number,
                            },
                            condition: {
                                type: String,
                            }
                        }
                    ]
                }
            ]
        }
    ]
}, { timestamps: true })

export default models.Career || model('Career', careerSchema);