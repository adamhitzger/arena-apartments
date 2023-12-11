import  EmailTemplate  from '@/app/component/email-template';
import { resend } from '@/app/lib/resend';
import { NextRequest, NextResponse } from 'next/server';

interface EmailProps {
    from: string;
    to: string;
    subject: string;
    content: string;
}

export async function POST(request: NextRequest) {
    const body = await request.json();

    let { from, to, subject, content }: EmailProps = body
  
    console.log(body)
      
    try {
      await resend.emails.send({
        from,
        to,
        subject,
        react: EmailTemplate({ content }),
      });
  
      return NextResponse.json({ status: 200 });
    } catch (error) {
      console.log(error)
      return NextResponse.json({ error: 'missing content' });
    }
}
