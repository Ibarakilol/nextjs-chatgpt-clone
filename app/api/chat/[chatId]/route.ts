export async function GET(request: Request, { params }: { params: { chatId: string } }) {
  try {
    const data = await fetch(`https://jsonplaceholder.typicode.com/todos/${params.chatId}`);
    const todo = await data.json();

    return Response.json(todo);
  } catch (err) {
    return new Response('Internal Error', { status: 500 });
  }
}
