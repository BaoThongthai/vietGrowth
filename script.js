let currentLang = 'vi';
const TELEGRAM_BOT_TOKEN = "8411668472:AAF7mzIiEot6vEQhqeHrZvpB4hLY_e6L6Ms";
const TELEGRAM_CHAT_ID = "8613386410";
async function handleLeadSubmit(event) {
    event.preventDefault(); const form = event.target; const fullName = form.querySelector('input[data-placeholder-vi="Họ và tên"]').value.trim(); const phone = form.querySelector('input[data-placeholder-vi="Số điện thoại / Zalo"]').value.trim(); const business = form.querySelector('input[data-placeholder-vi="Bạn đang kinh doanh sản phẩm/dịch vụ gì?"]').value.trim(); const service = form.querySelector('select').value; const note = form.querySelector('textarea').value.trim(); const btn = form.querySelector('button[type="submit"]'); const message = `🔥 LEAD MỚI TỪ VIET GROWTH EU

👤 Họ tên: ${fullName}
📞 Liên hệ: ${phone}
💼 Sản phẩm/Dịch vụ: ${business}
🧩 Nhu cầu: ${service}
📝 Ghi chú: ${note || 'Không có'}

⏰ Thời gian: ${new Date().toLocaleString('vi-VN')}`; btn.disabled = true; btn.textContent = currentLang === 'vi' ? 'Đang gửi...' : 'Sending...'; try { const res = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ chat_id: TELEGRAM_CHAT_ID, text: message }) }); if (!res.ok) throw new Error('Telegram API error'); alert(currentLang === 'vi' ? 'Đã gửi thông tin! Viet Growth EU sẽ liên hệ tư vấn sớm.' : 'Submitted successfully! Viet Growth EU will contact you soon.'); form.reset() } catch (e) { alert(currentLang === 'vi' ? 'Gửi chưa thành công. Vui lòng nhắn trực tiếp qua Zalo/Messenger.' : 'Submission failed. Please contact us via Zalo/Messenger.') } finally { btn.disabled = false; btn.textContent = currentLang === 'vi' ? 'Gửi thông tin tư vấn' : 'Submit consultation request' }
}
function setLang(lang) { currentLang = lang; document.documentElement.lang = lang; document.getElementById('btnVi').classList.toggle('active', lang === 'vi'); document.getElementById('btnEn').classList.toggle('active', lang === 'en'); document.querySelectorAll('[data-vi][data-en]').forEach(el => { el.innerHTML = el.getAttribute('data-' + lang) }); document.querySelectorAll('[data-placeholder-vi][data-placeholder-en]').forEach(el => { el.placeholder = el.getAttribute('data-placeholder-' + lang) }); document.querySelectorAll('select option[data-vi][data-en]').forEach(o => { o.textContent = o.getAttribute('data-' + lang) }) }
function hideInstallTip() { localStorage.setItem('hideInstallTip', '1'); const t = document.getElementById('installTip'); if (t) t.style.display = 'none' }
setTimeout(() => { const isStandalone = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone; const tip = document.getElementById('installTip'); if (tip && !isStandalone && localStorage.getItem('hideInstallTip') !== '1') tip.style.display = 'block' }, 1800);
const observer = new IntersectionObserver(entries => { entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('show') }) }, { threshold: .15 }); document.querySelectorAll('.fade-up, .zoom-in, .slide-left, .slide-right').forEach(el => observer.observe(el));