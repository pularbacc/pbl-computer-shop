using Microsoft.AspNetCore.SignalR;
using System;

namespace ServerGz.Controllers
{
    public class Chat : Hub
    {
        public void Send(string name , string message)
        {
            Clients.All.SendAsync("send",name,message);
        }
    }
}