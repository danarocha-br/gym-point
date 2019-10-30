import { format, parseISO } from 'date-fns';

import Mail from '../../lib/Mail';

class AnswerMail {
  get key() {
    return 'AnswerMail';
  }

  async handle({ data }) {
    const { helpOrder } = data;

    await Mail.sendMail({
      to: `${helpOrder.student.name} <${helpOrder.student.email}>`,
      subject: 'You have a new answer to your order. Check it out!',
      template: 'answer',
      context: {
        student: helpOrder.student.name,
        order: helpOrder.id,
        question: helpOrder.question,
        answer: helpOrder.answer,
        answerDate: format(
          parseISO(helpOrder.answer_at),
          "'on' dd MMMM, 'at' H:mm'h'"
        ),
      },
    });
  }
}

export default new AnswerMail();
